import React, { useMemo, useCallback } from 'react'
import Typography from '@mui/material/Typography'
import MuiSlider from '@mui/material/Slider'
import Grid from '@mui/material/Grid'
import MuiInput from '@mui/material/Input'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
import Stack from '@mui/material/Stack'

export type Props = {
  title?: string
  disabled?: boolean
  value: number
  max: number
  min: number
  sliderStep: number
  step: number
  handleSliderChange: (value: number) => void
}

export const Slider: React.FC<Props> = (props) => {
  const value = useMemo(() => {
    return props.value
  }, [props.value])
  const handleSliderChange: Parameters<typeof MuiSlider>[0]['onChange'] = useCallback(
    (event, newValue) => {
      const val = newValue as number
      if (val < props.min) {
        props.handleSliderChange(props.min)
        return
      }
      if (val > props.max) {
        props.handleSliderChange(props.max)
        return
      }
      props.handleSliderChange(val)
    },
    [props]
  )

  const handleInputChange: Parameters<typeof MuiInput>[0]['onChange'] = useCallback(
    (event) => {
      if (event.target.value === '') {
        props.handleSliderChange(props.max)
        return
      }
      const val = Number(event.target.value)
      if (val < props.min) {
        props.handleSliderChange(props.min)
        return
      }
      props.handleSliderChange(val)
    },
    [props]
  )

  const handleBlur = useCallback(() => {
    if (props.value < props.min) {
      props.handleSliderChange(props.min)
    } else if (props.value > props.max) {
      props.handleSliderChange(props.max)
    }
  }, [props])

  const onAdd = useCallback(() => {
    const val = props.value + props.sliderStep > props.max ? props.max : props.value + props.sliderStep
    props.handleSliderChange(val)
  }, [props])

  const onRemove = useCallback(() => {
    const val = props.value - props.sliderStep < props.min ? props.min : props.value - props.sliderStep
    props.handleSliderChange(val)
  }, [props])

  return (
    <Grid container>
      {props.title && (
        <Grid item xs>
          <Typography id={props.title}>{props.title}</Typography>
        </Grid>
      )}
      <Grid item container spacing={2} alignItems="center">
        <Grid item xs>
          <Stack spacing={1} direction="row" sx={{ mb: 1 }} alignItems="center">
            <RemoveIcon onClick={onRemove} />
            <MuiSlider
              disabled={props.disabled}
              value={value}
              min={props.min}
              max={props.max}
              step={props.sliderStep || 1}
              valueLabelDisplay="auto"
              onChange={handleSliderChange}
              aria-labelledby="input-slider"
            />
            <AddIcon onClick={onAdd} />
          </Stack>
        </Grid>
        <Grid item>
          <MuiInput
            disabled={props.disabled}
            value={value}
            size="small"
            onChange={handleInputChange}
            onBlur={handleBlur}
            inputProps={{
              step: props.step,
              min: props.min,
              max: props.max,
              type: 'number',
              'aria-labelledby': props.title
            }}
          />
        </Grid>
      </Grid>
    </Grid>
  )
}
