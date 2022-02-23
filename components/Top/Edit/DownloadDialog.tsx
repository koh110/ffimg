import React, { useRef, useMemo, useState, useCallback } from 'react'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import Button from '@mui/material/Button'
import DownloadIcon from '@mui/icons-material/Download'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectProps } from '@mui/material/Select'
import { Slider } from './Slider'

type Props = {
  open: boolean
  onClose: () => void
  dataUrl: string
  fileName: string
}

const round = (val: number): number => {
  return Math.round(val * 10) / 10
}

export const DownloadDialog: React.FC<Props> = (props) => {
  const [type, setType] = useState('png')
  const [blob, setBlob] = useState<Blob | null>(null)
  const [size, setSize] = useState(0)
  const [quality, setQuality] = useState(1)
  const imageRef = useRef<HTMLImageElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const fileName = useMemo(() => {
    return props.fileName.slice(0, props.fileName.lastIndexOf('.'))
  }, [props.fileName])
  const sizeStr = useMemo(() => {
    if (size >= 1000 * 1000 * 1000) {
      return `${round(size / 1000 / 1000 / 1000)}GB`
    }
    if (size >= 1000 * 1000) {
      return `${round(size / 1000 / 1000)}MB`
    }
    if (size >= 1000) {
      return `${round(size / 1000)}KB`
    }
    return `${round(size)}B`
  }, [size])

  const onClose = useCallback(() => {
    props.onClose()
  }, [props])

  const toBlob = useCallback(
    (_type: string) => {
      if (!canvasRef.current) {
        return
      }
      const set = (blob: Blob | null) => {
        setBlob(blob)
        setSize(blob?.size ?? 0)
      }
      if (_type === 'jpeg') {
        canvasRef.current.toBlob(set, `image/${_type}`, quality)
        return
      }
      canvasRef.current.toBlob(set, `image/${_type}`)
    },
    [quality]
  )

  const onloadImage = useCallback(() => {
    if (!canvasRef.current || !imageRef.current) {
      return
    }
    canvasRef.current.width = imageRef.current.naturalWidth
    canvasRef.current.height = imageRef.current.naturalHeight
    const ctx = canvasRef.current.getContext('2d')
    ctx?.drawImage(imageRef.current, 0, 0)
    toBlob(type)
  }, [toBlob, type])

  const onSelectType: SelectProps<string>['onChange'] = useCallback(
    (e) => {
      const _type = e.target.value
      setType(_type)
      toBlob(_type)
    },
    [toBlob]
  )

  const handleSliderChange = useCallback(
    (val: number) => {
      setQuality(val)
      toBlob(type)
    },
    [toBlob, type]
  )

  const download = useCallback(() => {
    if (!canvasRef.current || !blob) {
      return
    }
    const link = document.createElement('a')
    link.download = `${fileName}.${type}`
    link.href = URL.createObjectURL(blob)
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }, [blob, fileName, type])

  return (
    <Dialog open={props.open} onClose={onClose} PaperProps={{ sx: { maxWidth: '80vw', borderRadius: '16px' } }}>
      <canvas ref={canvasRef} style={{ display: 'none' }} />
      <DialogTitle>
        {fileName}.{type}
      </DialogTitle>
      <DialogContent dividers>
        <Stack spacing={2}>
          <img ref={imageRef} src={props.dataUrl} onLoad={onloadImage} style={{ maxWidth: '100%' }} />
          <Grid container spacing={2} width="100%">
            <Grid item xs={2} pl={0}>
              <Paper
                variant="outlined"
                sx={{
                  backgroundColor: 'transparent',
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <Typography variant="h5" component="div">
                  {sizeStr}
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={10}>
              <Stack spacing={1}>
                <FormControl fullWidth>
                  <InputLabel id="download-file-ext">ファイルの種類</InputLabel>
                  <Select
                    labelId="download-file-ext"
                    id="download-file-select"
                    value={type}
                    label="type"
                    onChange={onSelectType}
                  >
                    <MenuItem value="png">png</MenuItem>
                    <MenuItem value="jpeg">jpeg</MenuItem>
                  </Select>
                </FormControl>
                {type === 'jpeg' && (
                  <Slider
                    title="保存品質"
                    value={quality}
                    handleSliderChange={handleSliderChange}
                    max={1}
                    min={0.01}
                    sliderStep={0.1}
                    step={0.01}
                  />
                )}
              </Stack>
            </Grid>
          </Grid>
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button variant="outlined" onClick={() => download()} startIcon={<DownloadIcon />}>
          ダウンロード
        </Button>
        <Button variant="text" onClick={onClose}>
          キャンセル
        </Button>
      </DialogActions>
    </Dialog>
  )
}
