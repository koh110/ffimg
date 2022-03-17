import React, { useRef, useEffect } from 'react'
import debounce from 'lodash.debounce'

type Props = {
  canvas?: HTMLCanvasElement
  style?: React.CSSProperties
}

export const ThumbImage: React.FC<Props> = (props) => {
  const ref = useRef<HTMLCanvasElement>(null)

  const debounceCopyCanvas = useRef(
    debounce((from: HTMLCanvasElement, to: HTMLCanvasElement)  => {
      to.width = from.width
      to.height = from.height
      to.getContext('2d')?.drawImage(from, 0 ,0)
    }, 500)
  )

  useEffect(() => {
    if (!props.canvas || !ref.current) {
      return
    }
    debounceCopyCanvas.current(props.canvas, ref.current)
  }, [props.canvas])


  return (
    <>
      <canvas id="c" ref={ref} style={{ maxWidth: '400px', maxHeight: '200px' }} />
    </>
  )
}
