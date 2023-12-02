import { useMemo } from 'react'
import Typography from '@mui/material/Typography'
import MuiSlider, { type SliderProps } from '@mui/material/Slider'
import Grid from '@mui/material/Grid'
import MuiInput, { type InputProps } from '@mui/material/Input'
import TextField from '@mui/material/TextField'
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

export function Slider(props: Props) {
  const value = useMemo(() => {
    return props.value
  }, [props.value])

  const handleSliderChange: Parameters<typeof MuiSlider>[0]['onChange'] =
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
    }

  const handleInputChange: Parameters<typeof MuiInput>[0]['onChange'] = 
    (event) => {
      if (event.target.value === '') {
        props.handleSliderChange(0)
        return
      }
      const val = Number(event.target.value)
      if (val < props.min) {
        props.handleSliderChange(props.min)
        return
      }
      props.handleSliderChange(val)
    }

  const handleBlur = () => {
    if (props.value < props.min) {
      props.handleSliderChange(props.min)
    } else if (props.value > props.max) {
      props.handleSliderChange(props.max)
    }
  }

  const onAdd = () => {
    const val = props.value + props.sliderStep > props.max ? props.max : props.value + props.sliderStep
    props.handleSliderChange(val)
  }

  const onRemove = () => {
    const val = props.value - props.sliderStep < props.min ? props.min : props.value - props.sliderStep
    props.handleSliderChange(val)
  }

  return (
    <Grid container>
      {props.title && (
        <Grid item xs>
          <Typography id={props.title}>{props.title}</Typography>
        </Grid>
      )}
      <Grid container spacing={2} alignItems="center">
        <Grid item xs>
          <Stack spacing={1} direction="row" alignItems="center" justifyContent="center">
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
          <TextField
            sx={{ width: 72 }}
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
