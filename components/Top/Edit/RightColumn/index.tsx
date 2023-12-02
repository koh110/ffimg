import { useCallback } from 'react'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import List from '@mui/material/List'
import Typography from '@mui/material/Typography'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import IconButton from '@mui/material/IconButton'
import DeleteIcon from '@mui/icons-material/Delete'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import DownloadIcon from '@mui/icons-material/Download'
import { useEditValue, useSetEditState } from '../../../../lib/hooks/edit'
import { InputColor, type Props as InputColorProps } from '../../../InputColor'
import { Slider, Props as SliderProps } from '../Slider'

export type Props = {
  thumb: React.ReactNode
  handleOnDownload: () => void
  handleOnCancel: () => void
  handleOnDeleteShape: (id: string, index: number) => void
  handleOnSelectShape: (id: string) => void
  handleOnChangeColorShape: (id: string, color: string) => void
  handleOnChangeOpacityShape: (id: string, opacity: number) => void
}

export function RightColumn(props: Props) {
  const { shape, shapeData } = useEditValue()
  const { removeShape, setShapeColor, setShapeOpacity } = useSetEditState()

  const handleOnDeleteShape = useCallback<Props['handleOnDeleteShape']>(
    (id, number) => {
      removeShape(number)
      props.handleOnDeleteShape(id, number)
    },
    [props, removeShape]
  )

  const handleOnChangeColorShape = (id: string, color: string) => {
    setShapeColor(id, color)
    props.handleOnChangeColorShape(id, color)
  }

  const handleOnChangeOpacityShape = (id: string, opacity: number) => {
    setShapeOpacity(id, opacity)
    props.handleOnChangeOpacityShape(id, opacity)
  }

  return (
    <Box sx={{ ml: 2, minWidth: '400px' }}>
      {props.thumb}
      <Divider />
      <Stack sx={{ pt: 1, pb: 1 }} direction="row" spacing={1}>
        <Button variant="outlined" onClick={props.handleOnDownload} startIcon={<DownloadIcon />}>
          ダウンロード
        </Button>
        <Button variant="outlined" onClick={props.handleOnCancel} startIcon={<ArrowBackIosIcon />}>
          戻る
        </Button>
      </Stack>
      <Divider />
      <Box sx={{ mt: 1 }}>
        <Typography>レイヤー</Typography>
        {shape.length > 0 && (
          <List dense={true}>
            {shape.map((e, i) => {
              const data = shapeData[e]
              return (
                <ListItem
                  key={e}
                  secondaryAction={
                    <IconButton color="primary" component="span" onClick={() => handleOnDeleteShape(e, i)}>
                      <DeleteIcon />
                    </IconButton>
                  }
                >
                  <ListItemButton onClick={() => props.handleOnSelectShape(e)}>
                    <ListItemText primary={`${i + 1}`} />
                    <InputColor disabled={false} value={data.color} onChange={(color) => handleOnChangeColorShape(e, color)} />
                    <Slider
                      value={data.opacity}
                      min={0.1}
                      max={1}
                      sliderStep={0.1}
                      step={0.1}
                      handleSliderChange={(opacity) => handleOnChangeOpacityShape(e, opacity)}
                    />
                  </ListItemButton>
                </ListItem>
              )
            })}
          </List>
        )}
      </Box>
    </Box>
  )
}