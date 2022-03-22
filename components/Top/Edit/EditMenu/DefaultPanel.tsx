import React, { useCallback } from 'react'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import CopyrightIcon from '@mui/icons-material/Copyright'
import Switch, { SwitchProps } from '@mui/material/Switch'
import { Slider, Props as SliderProps } from '../Slider'
import { useEditValue, useSetEditState } from '../../../../lib/hooks/edit'
import { useEditUIValue, useSetEditUIState } from '../../../../lib/hooks/edit/ui'
import { InputColor, Props as InputColorProps } from '../../../InputColor'
import { CropHandler } from '../../../../lib/type'

export type Props = {
  handleScaleChange: SliderProps['handleSliderChange']
  handleRotateChange: SliderProps['handleSliderChange']
  handleOnCopyright: (
    copyrightFlag: boolean,
    fontSize: number,
    color: string | fabric.Pattern | fabric.Gradient
  ) => void
  handleOnCrop: CropHandler
}

export const DefaultPanel: React.FC<Props> = (props) => {
  const { scale, rotate, copyrightColor, copyrightFontSize } = useEditValue()
  const { copyrightFlag } = useEditUIValue()
  const { setScale, setRotate, setCopyrightFontSize, setCopyrightColor } = useSetEditState()
  const { copyrightOn, copyrightOff, cropRemove } = useSetEditUIState()

  const handleScaleChange = useCallback<SliderProps['handleSliderChange']>(
    (newScale) => {
      setScale(newScale)
      props.handleScaleChange(newScale)
    },
    [props, setScale]
  )

  const handleRotateChange = useCallback<SliderProps['handleSliderChange']>(
    (newRotate) => {
      setRotate(newRotate)
      props.handleRotateChange(newRotate)
      cropRemove(props.handleOnCrop)
    },
    [cropRemove, props, setRotate]
  )

  const handleOnCopyright = useCallback<NonNullable<SwitchProps['onChange']>>(
    (e, checked) => {
      if (checked) {
        copyrightOn()
      } else {
        copyrightOff()
      }
      props.handleOnCopyright(checked, copyrightFontSize, copyrightColor)
    },
    [copyrightColor, copyrightFontSize, copyrightOff, copyrightOn, props]
  )

  const handleOnSliderCopyright = useCallback<NonNullable<SliderProps['handleSliderChange']>>(
    (val) => {
      setCopyrightFontSize(val)
      props.handleOnCopyright(copyrightFlag, val, copyrightColor)
    },
    [copyrightColor, copyrightFlag, props, setCopyrightFontSize]
  )

  const handleOnChangeColorCopyright = useCallback<NonNullable<InputColorProps['onChange']>>(
    (color) => {
      setCopyrightColor(color)
      props.handleOnCopyright(copyrightFlag, copyrightFontSize, color)
    },
    [copyrightFlag, copyrightFontSize, props, setCopyrightColor]
  )

  return (
    <>
      <Slider
        title="拡大/縮小"
        value={scale}
        min={1}
        max={100}
        sliderStep={10}
        step={1}
        handleSliderChange={handleScaleChange}
      />
      <Slider
        title="回転"
        value={rotate}
        min={-180}
        max={180}
        sliderStep={45}
        step={1}
        handleSliderChange={handleRotateChange}
      />
      <Box>
        <Stack direction="row" alignItems="center" spacing={2}>
          <CopyrightIcon />
          <Switch onChange={handleOnCopyright} />
          <InputColor disabled={!copyrightFlag} value={copyrightColor} onChange={handleOnChangeColorCopyright} />
        </Stack>
        <Slider
          disabled={!copyrightFlag}
          value={copyrightFontSize}
          min={0}
          max={50}
          sliderStep={1}
          step={1}
          handleSliderChange={handleOnSliderCopyright}
        />
      </Box>
    </>
  )
}
