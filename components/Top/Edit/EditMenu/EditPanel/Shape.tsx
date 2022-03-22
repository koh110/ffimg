import React, { useCallback } from 'react'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import DeleteIcon from '@mui/icons-material/Delete'
import IconButton from '@mui/material/IconButton'
import { InputColor, Props as InputColorProps } from '../../../../InputColor'
import { Slider, Props as SliderProps } from '../../Slider'
import { createRandomId } from '../../../../../lib/util'
import { useEditValue, useSetEditState } from '../../../../../lib/hooks/edit'

export type Props = {
  handleOnAddShape: (id: string, color: string) => void
  handleOnChangeColorShape: (color: string) => void
  handleOnChangeOpacityShape: (opacity: number) => void
  handleOnSelectShape: (id: string) => void
  handleOnDeleteShape: (id: string, index: number) => void
}

export const Shape: React.FC<Props> = (props) => {
  const { shape, shapeColor, shapeOpacity } = useEditValue()
  const { addShape, removeShape, setShapeColor, setShapeOpacity } = useSetEditState()

  const add = useCallback(() => {
    const id = createRandomId()
    addShape(id)
    props.handleOnAddShape(id, shapeColor)
  }, [addShape, props, shapeColor])

  const handleOnChangeColorShape = useCallback<NonNullable<InputColorProps['onChange']>>((color) => {
    setShapeColor(color)
    props.handleOnChangeColorShape(color)
  }, [props, setShapeColor])

  const handleOnDeleteShape = useCallback<Props['handleOnDeleteShape']>(
    (id, number) => {
      removeShape(number)
      props.handleOnDeleteShape(id, number)
    },
    [props, removeShape]
  )

  const handleOnChangeOpacityShape = useCallback<SliderProps['handleSliderChange']>((opacity) => {
    setShapeOpacity(opacity)
    props.handleOnChangeOpacityShape(opacity)
  }, [props, setShapeOpacity])

  return (
    <Stack direction="column" spacing={1}>
      <Stack direction="row" spacing={2}>
        <Button variant="outlined" onClick={add}>
          四角
        </Button>
        <InputColor
          disabled={false}
          value={shapeColor}
          onChange={handleOnChangeColorShape}
        />
        <Slider
          value={shapeOpacity}
          min={0.1}
          max={1}
          sliderStep={0.1}
          step={0.1}
          handleSliderChange={handleOnChangeOpacityShape}
        />
      </Stack>
      {shape.length > 0 && (
        <List dense={true}>
          {shape.map((e, i) => {
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
                </ListItemButton>
              </ListItem>
            )
          })}
        </List>
      )}
    </Stack>
  )
}
