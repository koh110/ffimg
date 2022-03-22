import React, { useRef, useEffect, useState, useCallback } from 'react'
import debounce from 'lodash.debounce'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'

type Props = {
  canvas?: HTMLCanvasElement
}

export const Thumb: React.FC<Props> = (props) => {
  const [dataUrl, setDataUrl] = useState('')
  const [width, setWidth] = useState(0)
  const [height, setHeight] = useState(0)

  const throttledDataUrl = useRef(
    debounce((canvas: HTMLCanvasElement | undefined) => {
      if (!canvas) {
        return
      }
      setDataUrl(canvas.toDataURL('image/jpeg'))
    }, 100)
  )

  const onLoad = useCallback<React.ReactEventHandler<HTMLImageElement>>((e) => {
    setWidth(e.currentTarget.naturalWidth)
    setHeight(e.currentTarget.naturalHeight)
  }, [])

  useEffect(() => {
    throttledDataUrl.current(props.canvas)
  }, [props.canvas])

  return (
    <Stack spacing={1}>
      <Box component="div">
        <img src={dataUrl} style={{ maxWidth: '400px', maxHeight: '200px' }} onLoad={onLoad} />
      </Box>
      <Typography variant="caption">
        {width} x {height}
      </Typography>
    </Stack>
  )
}
