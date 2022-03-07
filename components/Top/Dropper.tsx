import React, { useEffect } from 'react'
import Paper from '@mui/material/Paper'
import ImageIcon from '@mui/icons-material/Image'
import Typography from '@mui/material/Typography'
import { useFileReader, Props as FileReaderProps } from './useFileReader'

export type Props = {
  onLoadFile: FileReaderProps['onLoadFile']
}

export const Dropper: React.FC<Props> = (props) => {
  const { ref, onChange } = useFileReader({ onLoadFile: props.onLoadFile })

  const onDragOver: React.DragEventHandler<HTMLDivElement> = (e) => {
    if (e.dataTransfer.types && Array.from(e.dataTransfer.types).includes('Files')) {
      e.dataTransfer.dropEffect = 'copy'
      e.preventDefault()
    }
  }

  const onDrop: React.DragEventHandler<HTMLDivElement> = (e) => {
    e.preventDefault()

    const data = e.dataTransfer

    const [file] = Array.from(data.files).filter(
      (f: any) => f.type.includes('image/jpeg') || f.type.includes('image/png')
    )

    const reader = new FileReader()
    reader.onload = () => {
      if (reader.result) {
        const loadFile = reader.result as string
        props.onLoadFile(loadFile, file.name)
      }
      if (ref && ref.current) {
        ref.current.value = ''
      }

      if (ref.current) {
        ref.current.value = ''
      }
    }
    reader.readAsDataURL(file)
  }

  const onClickDrop = () => {
    ref.current?.click()
  }

  // ターゲット以外の場所にdropしてしまった時にブラウザで画像を開かないように
  useEffect(() => {
    const _onDragOver = (e: DragEvent) => e.preventDefault()
    const _onDrop = (e: DragEvent) => e.preventDefault()
    document.addEventListener('dragover', _onDragOver, false)
    document.addEventListener('drop', _onDrop, false)

    return () => {
      document.removeEventListener('dragover', _onDragOver)
      document.removeEventListener('drop', _onDrop)
    }
  }, [])

  return (
    <Paper
      variant="outlined"
      onClick={onClickDrop}
      onDrop={onDrop}
      onDragOver={onDragOver}
      sx={{
        backgroundColor: 'transparent',
        width: '100%',
        minHeight: '200px',
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <ImageIcon />
      <Typography variant="h6" component="div">
        画像をドラッグ&ドロップでアップロード
      </Typography>
      <input style={{ display: 'none' }} type="file" accept=".jpg,.jpeg,.png" onChange={onChange} ref={ref} />
    </Paper>
  )
}
