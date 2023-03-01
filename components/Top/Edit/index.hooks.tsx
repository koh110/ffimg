import { useRef } from 'react'
import throttle from 'lodash.throttle'
import { fabric } from 'fabric'

export const useBlur = () => {
  const createBlur = (canvas: fabric.Canvas, id: string) => {
    const zoom = canvas.getZoom()

    canvas.setZoom(1)
    const canvasWidth = canvas.width ?? 100
    const canvasHeight = canvas.height ?? 100

    const copiedCanvas = canvas.toCanvasElement(1, {
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
    canvas.add(blurImage)
    canvas.setActiveObject(blurImage)
    canvas.setZoom(100 / zoom)

    canvas.renderAll()

    return blurImage
  }

  const moveBlur = useRef(
    throttle((canvas: fabric.Canvas, image: fabric.Image) => {
      const canvasWidth = canvas.width ?? 100
      const canvasHeight = canvas.height ?? 100
      const scaleX = image.scaleX ?? 1
      const scaleY = image.scaleY ?? 1
      const top = image.top ?? 0
      const left = image.left ?? 0
      const width = image.width ?? 1
      const height = image.height ?? 1
      image.cropX = (left + canvasWidth / 2) * scaleX
      image.cropY = (top + canvasHeight / 2) * scaleY
      image.width = width * scaleX
      image.height = height * scaleY
      image.scaleX = 1
      image.scaleY = 1
      canvas.renderAll()
    }, 10)
  )

  return {
    createBlur,
    moveBlur: moveBlur.current
  } as const
}
