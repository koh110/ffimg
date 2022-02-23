import Button from '@mui/material/Button'
import AddToPhotosIcon from '@mui/icons-material/AddToPhotos'
import { useFileReader, Props as FileReaderProps } from './useFileReader'

export type Props = {
  onLoadFile: FileReaderProps['onLoadFile']
}

export const Upload: React.FC<Props> = (props) => {
  const { ref, onChange } = useFileReader({ onLoadFile: props.onLoadFile })

  const onClick = () => {
    ref.current?.click()
  }

  return (
    <>
      <Button variant="outlined" onClick={onClick} endIcon={<AddToPhotosIcon />}>
        アップロード
      </Button>
      <input style={{ display: 'none' }} type="file" accept=".jpg,.jpeg,.png" onChange={onChange} ref={ref} />
    </>
  )
}
