import React, { useCallback } from 'react'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import CopyrightIcon from '@mui/icons-material/Copyright'
import Switch, { SwitchProps } from '@mui/material/Switch'
import { Slider, Props as SliderProps } from '../Slider'
import { useEditValue, useSetEditState } from '../../../../lib/hooks/edit'
import { InputColor, Props as InputColorProps } from '../../../InputColor'
import { CropHandler } from '../../../../lib/type'

export type Props = {
  onChangeScale: SliderProps['handleSliderChange']
  onChangeRotate: SliderProps['handleSliderChange']
  onChangeCopyright: (copyrightFlag: boolean) => void
  onChangeCopyrightFontSize: (fontSize: number) => void
  onChangeCopyrightColor: (color: string) => void
  onChangeCrop: CropHandler
}

export const DefaultPanel: React.FC<Props> = (props) => {
  const { scale, rotate, copyrightColor, copyrightFontSize, copyrightFlag } = useEditValue()
  const { setScale, setRotate, setCopyrightFontSize, setCopyrightColor, copyrightOn, copyrightOff, cropRemove } = useSetEditState()

  const handleScaleChange = useCallback<SliderProps['handleSliderChange']>(
    (newScale) => {
      setScale(newScale)
      props.onChangeScale(newScale)
    },
    [props, setScale]
  )

  const handleRotateChange = useCallback<SliderProps['handleSliderChange']>(
    (newRotate) => {
      setRotate(newRotate)
      props.onChangeRotate(newRotate)
      cropRemove(props.onChangeCrop)
    },
    [cropRemove, props, setRotate]
  )

  const onChangeCopyright = useCallback<NonNullable<SwitchProps['onChange']>>(
    (e, checked) => {
      if (checked) {
        copyrightOn()
      } else {
        copyrightOff()
      }
      props.onChangeCopyright(checked)
    },
    [copyrightOff, copyrightOn, props]
  )

  const handleOnSliderCopyright = useCallback<NonNullable<SliderProps['handleSliderChange']>>(
    (val) => {
      setCopyrightFontSize(val)
      props.onChangeCopyrightFontSize(val)
    },
    [props, setCopyrightFontSize]
  )

  const onChangeCopyrightColor = useCallback<NonNullable<InputColorProps['onChange']>>(
    (color) => {
      setCopyrightColor(color)
      props.onChangeCopyrightColor(color)
    },
    [props, setCopyrightColor]
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
        sliderStep={15}
        step={1}
        handleSliderChange={handleRotateChange}
      />
      <Box>
        <Stack direction="row" alignItems="center" spacing={2}>
          <CopyrightIcon />
          <Switch onChange={onChangeCopyright} />
          <InputColor disabled={!copyrightFlag} value={copyrightColor} onChange={onChangeCopyrightColor} />
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
