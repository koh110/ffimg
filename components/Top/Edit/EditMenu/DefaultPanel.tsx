import React from 'react'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import CopyrightIcon from '@mui/icons-material/Copyright'
import MuiInput, { InputProps } from '@mui/material/Input'
import Switch, { SwitchProps } from '@mui/material/Switch'
import { Slider, Props as SliderProps } from '../Slider'

export type Props = {
  scale: number
  rotate: number
  copyrightColor: string | fabric.Pattern | fabric.Gradient
  copyrightFontSize: number
  checkedCopyright: boolean
  handleScaleChange: (scale: number) => void
  handleRotateChange: (rotate: number) => void
  handleOnCopyright: SwitchProps['onChange']
  handleOnChangeColorCopyright: InputProps['onChange']
  handleOnSliderCopyright: SliderProps['handleSliderChange']
}

export const DefaultPanel: React.FC<Props> = (props) => {
  return (
    <>
      <Slider
        title="拡大/縮小"
        value={props.scale}
        min={1}
        max={100}
        sliderStep={10}
        step={1}
        handleSliderChange={props.handleScaleChange}
      />
      <Slider
        title="回転"
        value={props.rotate}
        min={-180}
        max={180}
        sliderStep={45}
        step={1}
        handleSliderChange={props.handleRotateChange}
      />
      <Box>
        <Stack direction="row" alignItems="center" spacing={2}>
          <CopyrightIcon />
          <Switch onChange={props.handleOnCopyright} />
          <MuiInput
            disabled={!props.checkedCopyright}
            type="color"
            sx={{ width: '2em' }}
            value={props.copyrightColor}
            onChange={props.handleOnChangeColorCopyright}
          />
        </Stack>
        <Slider
          disabled={!props.checkedCopyright}
          value={props.copyrightFontSize}
          min={0}
          max={50}
          sliderStep={1}
          step={1}
          handleSliderChange={props.handleOnSliderCopyright}
        />
      </Box>
    </>
  )
}
