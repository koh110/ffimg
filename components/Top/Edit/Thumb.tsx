import React, { useRef, useEffect, useState } from 'react'
import debounce from 'lodash.debounce'

type Props = {
  canvas?: HTMLCanvasElement
}

export const Thumb: React.FC<Props> = (props) => {
  const [dataUrl, setDataUrl] = useState('')

  const throttledDataUrl = useRef(
    debounce((canvas: HTMLCanvasElement | undefined) => {
      if (!canvas) {
        return
      }
      setDataUrl(canvas.toDataURL('image/jpeg'))
    }, 100)
  )

  useEffect(() => {
    throttledDataUrl.current(props.canvas)
  }, [props.canvas])

  return <img src={dataUrl} style={{ maxWidth: '400px', maxHeight: '200px' }} />
}
