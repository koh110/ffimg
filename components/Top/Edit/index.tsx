import React, { useRef, useState, useEffect, useCallback } from 'react'
import { fabric } from 'fabric'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import { Head, Header } from '../../Header'
import { EditMenu, Props as EditMenuProps } from './EditMenu'
import { DownloadDialog } from './DownloadDialog'
import { COPYRIGHT_STR } from '../../../lib/constants'

type Props = {
  file: string
  fileName: string
  onBack: () => void
}
const INIT_COPYRIGHT_FONTSIZE = 15
const INIT_COPYRIGHT_FILL = '#FFFFFF'

const INIT_COPYRIGHT: fabric.TextOptions = {
  left: 0,
  top: 0,
  fill: INIT_COPYRIGHT_FILL,
  fontSize: INIT_COPYRIGHT_FONTSIZE,
  selectable: false,
  hasControls: false,
  visible: false
}

export const Edit: React.FC<Props> = (props) => {
  const saveCropTimer = useRef<number>()
  const fabricRef = useRef<fabric.Canvas>()
  const boundingBoxRef = useRef<fabric.Rect>()
  const cropRef = useRef<fabric.Rect>()
  const imageRef = useRef<fabric.Image>()
  const copyrightRef = useRef<fabric.Text>()
  const [copyright, setCopyrightState] = useState({ ...INIT_COPYRIGHT })
  const imgDomRef = useRef<HTMLImageElement>(null)
  const [dataUrl, setDataUrl] = useState('')
  const [cropFlag, setCropFlag] = useState(false)
  const [scale, setScale] = useState<number>(100)
  const [rotate, setRotate] = useState<number>(0)
  const [modalOpen, setModalOpen] = useState<boolean>(false)

  const saveCropDataUrl = useCallback(
    (crop: boolean) => {
      if (saveCropTimer.current) {
        clearTimeout(saveCropTimer.current)
      }
      saveCropTimer.current = window.setTimeout(() => {
        if (!fabricRef.current) {
          return
        }
        fabricRef.current?.setZoom(1)
        const options: fabric.IDataURLOptions = {
          format: 'png',
          left: 0,
          top: 0,
          width: ((fabricRef.current.width ?? 1) * 100) / scale,
          height: ((fabricRef.current.height ?? 1) * 100) / scale
        }
        if (cropRef.current && crop) {
          cropRef.current.set({ opacity: 0 }).setCoords()
          const scaleX = cropRef.current.scaleX ?? 1
          const scaleY = cropRef.current.scaleY ?? 1
          options.left = cropRef.current.left ?? 0
          options.top = cropRef.current.top ?? 0
          options.width = (cropRef.current.width ?? 1) * scaleX
          options.height = (cropRef.current.height ?? 1) * scaleY
        }
        const _dataUrl = fabricRef.current.toDataURL(options)
        setDataUrl(_dataUrl)

        if (cropRef.current && crop) {
          cropRef.current?.set({ opacity: 1 }).setCoords()
        }
        fabricRef.current?.setZoom(scale / 100)
      }, 200)
    },
    [scale]
  )

  const setCanvasSize = useCallback((_scale: number) => {
    if (!imageRef.current) {
      return
    }

    fabricRef.current?.setZoom(_scale / 100)
    const bounding = imageRef.current.setCoords().getBoundingRect()
    fabricRef.current?.setDimensions({
      width: bounding.width,
      height: bounding.height
    })

    if (boundingBoxRef.current) {
      boundingBoxRef.current
        .set({
          top: 0,
          left: 0,
          width: (bounding.width / _scale) * 100,
          height: (bounding.height / _scale) * 100
        })
        .setCoords()
    }

    imageRef.current.viewportCenter().setCoords()
  }, [])

  const handleScaleChange = useCallback(
    (_scale: number) => {
      setScale(_scale)
      setCanvasSize(_scale)
    },
    [setCanvasSize]
  )

  const handleRotateChange = useCallback(
    (_rotate: number) => {
      setRotate(_rotate)
      if (imageRef.current) {
        imageRef.current.rotate(_rotate)
      }
      setCanvasSize(scale)
      fabricRef.current?.renderAll()
      saveCropDataUrl(cropFlag)
    },
    [cropFlag, saveCropDataUrl, scale, setCanvasSize]
  )

  const initCrop = useCallback(() => {
    if (!cropRef.current) {
      return
    }

    cropRef.current.set({
      visible: false,
      top: 0,
      left: 0,
      scaleX: 1,
      scaleY: 1
    })

    if (boundingBoxRef.current?.width) {
      const width = boundingBoxRef.current.width * 0.8
      cropRef.current.left = (boundingBoxRef.current.width - width) / 2
      cropRef.current.width = width
    }

    if (boundingBoxRef.current?.height) {
      const height = boundingBoxRef.current.height * 0.8
      cropRef.current.top = (boundingBoxRef.current.height - height) / 2
      cropRef.current.height = height
    }

    cropRef.current.setCoords()
    fabricRef.current?.discardActiveObject()
  }, [])

  const handleOnCrop: EditMenuProps['handleOnCrop'] = useCallback(
    (state) => {
      if (!cropRef.current) {
        return
      }

      if (state.type === 'start') {
        cropRef.current.strokeWidth = 0
        cropRef.current.fill = 'rgba(0, 0, 0, 0.5)'
        cropRef.current.selectable = true
        cropRef.current.visible = true
        cropRef.current.bringToFront()
        fabricRef.current?.setActiveObject(cropRef.current)
        setCropFlag(true)
        return
      }

      cropRef.current.selectable = false
      let flag = cropFlag

      if (state.type === 'cancel') {
        flag = false
        initCrop()
      }

      if (state.type === 'done') {
        flag = true
        cropRef.current.fill = 'rgba(0, 0, 0, 0)'
        cropRef.current.strokeWidth = 1
        cropRef.current.bringToFront()
        fabricRef.current?.discardActiveObject()
      }

      setCropFlag(flag)
      saveCropDataUrl(flag)
      fabricRef.current?.renderAll()
    },
    [cropFlag, initCrop, saveCropDataUrl]
  )

  const handleOnCopyright: EditMenuProps['handleOnCopyright'] = useCallback(
    (checked, fontSize, color) => {
      if (!copyrightRef.current) {
        return
      }

      if (!checked) {
        copyrightRef.current.selectable = false
        copyrightRef.current.visible = false
        fabricRef.current?.discardActiveObject()
        fabricRef.current?.renderAll()
        saveCropDataUrl(cropFlag)
        return
      }

      setCopyrightState({
        ...copyright,
        fontSize,
        fill: color
      })

      copyrightRef.current.set({
        left: 0,
        top: 0,
        fontSize: fontSize,
        fill: color,
        selectable: true,
        visible: true
      })

      if (cropFlag) {
        copyrightRef.current.set({
          left: Math.max(cropRef.current?.left ?? 0, 0),
          top: Math.max(cropRef.current?.top ?? 0, 0)
        })
      }

      copyrightRef.current.setCoords()
      copyrightRef.current.bringToFront()
      fabricRef.current?.setActiveObject(copyrightRef.current)
      fabricRef.current?.renderAll()
      saveCropDataUrl(cropFlag)
    },
    [copyright, cropFlag, saveCropDataUrl]
  )

  const ref = useCallback((node) => {
    if (node) {
      const f = new fabric.Canvas(node, {
        isDrawingMode: false,
        backgroundColor: 'rgba(255, 255, 255, 0.05)'
      })
      f.setDimensions({
        width: '400',
        height: '400'
      })

      const copyrightText = new fabric.Text(COPYRIGHT_STR, { ...INIT_COPYRIGHT })
      f.add(copyrightText)
      copyrightRef.current = copyrightText

      const boundingBox = new fabric.Rect({
        fill: 'none',
        width: 20,
        height: 20,
        evented: false,
        selectable: false
      })
      boundingBoxRef.current = boundingBox
      f.add(boundingBox)

      const crop = new fabric.Rect({
        fill: 'rgba(0, 0, 0, 0)',
        width: 20,
        height: 20,
        cornerStyle: 'circle',
        stroke: 'red',
        strokeWidth: 1,
        strokeUniform: true,
        visible: false
      })
      crop.setControlsVisibility({ mtr: false })
      f.add(crop)
      cropRef.current = crop

      fabricRef.current = f
    } else if (fabricRef.current) {
      fabricRef.current.dispose()
    }
  }, [])

  const imageOnLoad = useCallback(() => {
    if (!imgDomRef.current || !fabricRef || !fabricRef.current) {
      return
    }

    const img = new fabric.Image(imgDomRef.current, {
      top: 0,
      left: 0,
      centeredRotation: true,
      selectable: false
    })
    imageRef.current = img
    fabricRef.current.add(img)

    setCanvasSize(scale)

    if (cropRef.current) {
      initCrop()
    }

    fabricRef.current.renderAll()
  }, [initCrop, scale, setCanvasSize])

  useEffect(() => {
    if (!imgDomRef.current) {
      return
    }
    imgDomRef.current.src = props.file
    setDataUrl(props.file)
  }, [props.file])

  const handleOnDownload = useCallback(() => {
    saveCropDataUrl(cropFlag)
    setModalOpen(true)
  }, [cropFlag, saveCropDataUrl])

  return (
    <>
      <Head />
      <main>
        <Header />
        <Container sx={{ my: 2 }} maxWidth={false}>
          <div style={{ overflow: 'auto', maxWidth: '100%', maxHeight: '100vh' }}>
            <Box>
              <img ref={imgDomRef} style={{ display: 'none' }} onLoad={imageOnLoad} />
              <canvas id="c" ref={ref} />
            </Box>
          </div>
        </Container>
        <EditMenu
          dataUrl={dataUrl}
          scale={scale}
          rotate={rotate}
          copyright={{
            fontSize: copyright.fontSize ?? INIT_COPYRIGHT_FONTSIZE,
            color: copyright.fill ?? INIT_COPYRIGHT_FILL
          }}
          handleScaleChange={handleScaleChange}
          handleRotateChange={handleRotateChange}
          handleOnCrop={handleOnCrop}
          handleOnCopyright={handleOnCopyright}
          handleOnCancel={props.onBack}
          handleOnDownload={handleOnDownload}
        />
        <DownloadDialog
          open={modalOpen}
          onClose={() => setModalOpen(false)}
          dataUrl={dataUrl}
          fileName={props.fileName}
        />
      </main>
    </>
  )
}
