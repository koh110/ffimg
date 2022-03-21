import React, { useRef, useState, useEffect, useCallback } from 'react'
import { fabric } from 'fabric'
import debounce from 'lodash.debounce'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import { Head, Header } from '../../Header'
import { EditMenu } from './EditMenu'
import { DefaultPanel, Props as DefaultPanelProps } from './EditMenu/DefaultPanel'
import { EditPanel, Props as EditPanelProps } from './EditMenu/EditPanel'
import { DownloadDialog } from './DownloadDialog'
import { COPYRIGHT_STR } from '../../../lib/constants'
import { useEditValue } from '../../../lib/hooks/edit'
import { useEditUIValue, useSetEditUIState } from '../../../lib/hooks/edit/ui'
import { Thumb } from './Thumb'

// テクスチャサイズの上限をあげる。動的に変更したい
// image blurなどが2048サイズになってしまうため
fabric.textureSize = 2048 * 4

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
} as const

export const Edit: React.FC<Props> = (props) => {
  const { scale } = useEditValue()
  const { openModalFlag, cropFlag } = useEditUIValue()
  const { openModal, closeModal } = useSetEditUIState()
  const fabricRef = useRef<fabric.Canvas>()
  const boundingBoxRef = useRef<fabric.Rect>()
  const cropRef = useRef<fabric.Rect>()
  const imageRef = useRef<fabric.Image>()
  const copyrightRef = useRef<fabric.Text>()
  const [copyright, setCopyrightState] = useState({ ...INIT_COPYRIGHT })
  const imgDomRef = useRef<HTMLImageElement>(null)
  const [downloadCanvas, setDownloadCanvas] = useState<HTMLCanvasElement>()

  const saveCropData = useRef(
    debounce((newScale: number, crop: boolean) => {
      if (!fabricRef.current) {
        return
      }
      fabricRef.current?.setZoom(1)
      const options: fabric.IDataURLOptions = {
        format: 'png',
        left: 0,
        top: 0,
        width: ((fabricRef.current.width ?? 1) * 100) / newScale,
        height: ((fabricRef.current.height ?? 1) * 100) / newScale
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
      setDownloadCanvas(fabricRef.current.toCanvasElement(1, options))

      if (cropRef.current && crop) {
        cropRef.current?.set({ opacity: 1 }).setCoords()
      }
      fabricRef.current?.setZoom(newScale / 100)
    }, 100)
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
    (newScale: number) => {
      setCanvasSize(newScale)
    },
    [setCanvasSize]
  )

  const handleRotateChange = useCallback(
    (_rotate: number) => {
      if (imageRef.current) {
        imageRef.current.rotate(_rotate)
      }
      setCanvasSize(scale)
      fabricRef.current?.renderAll()
      saveCropData.current(scale, cropFlag)
    },
    [cropFlag, scale, setCanvasSize]
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

  const handleOnCrop: EditPanelProps['handleOnCrop'] = useCallback(
    (state) => {
      if (!cropRef.current) {
        return
      }

      if (state.state === 'start') {
        cropRef.current.strokeWidth = 0
        cropRef.current.fill = 'rgba(0, 0, 0, 0.5)'
        cropRef.current.selectable = true
        cropRef.current.visible = true
        cropRef.current.bringToFront()
        fabricRef.current?.setActiveObject(cropRef.current)
        return
      }

      cropRef.current.selectable = false

      if (state.state === 'none') {
        initCrop()
      }

      if (state.state === 'done') {
        cropRef.current.fill = 'rgba(0, 0, 0, 0)'
        cropRef.current.strokeWidth = 1
        cropRef.current.bringToFront()
        fabricRef.current?.discardActiveObject()
      }

      saveCropData.current(scale, state.cropFlag)
      fabricRef.current?.renderAll()
    },
    [initCrop, scale]
  )

  const handleOnCopyright: DefaultPanelProps['handleOnCopyright'] = useCallback(
    (checked, fontSize, color) => {
      if (!copyrightRef.current) {
        return
      }

      if (!checked) {
        copyrightRef.current.selectable = false
        copyrightRef.current.visible = false
        fabricRef.current?.discardActiveObject()
        fabricRef.current?.renderAll()
        saveCropData.current(scale, cropFlag)
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
      saveCropData.current(scale, cropFlag)
    },
    [copyright, cropFlag, scale]
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

    saveCropData.current(scale, cropFlag)
    fabricRef.current.renderAll()
  }, [cropFlag, initCrop, scale, setCanvasSize])

  useEffect(() => {
    if (!imgDomRef.current) {
      return
    }
    imgDomRef.current.src = props.file
  }, [props.file])

  const handleOnDownload = useCallback(() => {
    saveCropData.current(scale, cropFlag)
    openModal()
  }, [cropFlag, openModal, scale])

  const handleOnBlur = useCallback((id) => {
    if (!fabricRef.current) {
      return
    }
    fabricRef.current.setZoom(1)
    const canvasWidth = (fabricRef.current.width ?? 100)
    const canvasHeight = (fabricRef.current.height ?? 100)

    const copiedCanvas = fabricRef.current.toCanvasElement(1, {
      width: canvasWidth * 2,
      height: canvasHeight * 2,
      left: -canvasWidth / 2,
      top: -canvasHeight / 2
    })

    const blurImage = new fabric.Image(copiedCanvas, {
      width: canvasWidth / 2,
      height: canvasHeight / 2,
      cropX: canvasWidth / 2,
      cropY: canvasHeight / 2,
      cornerStyle: 'circle',
      strokeWidth: 1,
      strokeUniform: true,
      objectCaching: false,
      visible: true,
      backgroundColor: 'rgba(255, 255, 255, 0.05)'
    })
    blurImage.id = id
    blurImage.setControlsVisibility({ mtr: false })
    const filter = new fabric.Image.filters.Blur({
      blur: 0.2
    })
    blurImage.filters?.push(filter)
    blurImage.applyFilters()
    fabricRef.current.add(blurImage)
    fabricRef.current.setActiveObject(blurImage)
    fabricRef.current.setZoom(100 / scale)
    fabricRef.current.renderAll()
    saveCropData.current(scale, cropFlag)

    const moveBlur = () => {
      const scaleX = blurImage.scaleX ?? 1
      const scaleY = blurImage.scaleY ?? 1
      const top = blurImage.top ?? 0
      const left = blurImage.left ?? 0
      const width = blurImage.width ?? 1
      const height = blurImage.height ?? 1
      blurImage.cropX = (left + canvasWidth / 2) * scaleX
      blurImage.cropY = (top + canvasHeight / 2) * scaleY
      blurImage.width = width * scaleX
      blurImage.height = height * scaleY
      blurImage.scaleX = 1
      blurImage.scaleY = 1
      fabricRef.current?.renderAll()
      saveCropData.current(scale, cropFlag)
    }

    blurImage.on('moving', (e) => moveBlur())
    blurImage.on('scaling', (e) => moveBlur())
  }, [cropFlag, scale])

  const handleOnSelectBlur = useCallback<EditPanelProps['handleOnSelectBlur']>((id) => {
    if (!fabricRef.current) {
      return
    }
    for (const obj of fabricRef.current.getObjects()) {
      if (obj.id === id) {
        console.log(obj)
        fabricRef.current.setActiveObject(obj)
        fabricRef.current.renderAll()
        break
      }
    }
  }, [])

  const handleOnDeleteBlur = useCallback<EditPanelProps['handleOnDeleteBlur']>((id, number) => {
    if (!fabricRef.current) {
      return
    }
    for (const obj of fabricRef.current.getObjects()) {
      if (obj.id === id) {
        fabricRef.current.remove(obj)
        saveCropData.current(scale, cropFlag)
        break
      }
    }
  }, [cropFlag, scale])

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
          thumb={<Thumb canvas={downloadCanvas} />}
          defaultPanel={
            <DefaultPanel
              handleScaleChange={handleScaleChange}
              handleRotateChange={handleRotateChange}
              handleOnCopyright={handleOnCopyright}
              handleOnCrop={handleOnCrop}
            />
          }
          editPanel={
            <EditPanel
              handleOnCrop={handleOnCrop}
              handleOnBlur={handleOnBlur}
              handleOnSelectBlur={handleOnSelectBlur}
              handleOnDeleteBlur={handleOnDeleteBlur}
            />
          }
          handleOnCancel={props.onBack}
          handleOnDownload={handleOnDownload}
        />
        <DownloadDialog
          open={openModalFlag}
          onClose={() => closeModal()}
          canvas={downloadCanvas}
          fileName={props.fileName}
        />
      </main>
    </>
  )
}
