import type { CropHandler } from '../../../../lib/type'
import { useCallback } from 'react'
import Divider from '@mui/material/Divider'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import CropIcon from '@mui/icons-material/Crop'
import DoneIcon from '@mui/icons-material/Done'
import DeleteIcon from '@mui/icons-material/Delete'
import IconButton from '@mui/material/IconButton'
import CopyrightIcon from '@mui/icons-material/Copyright'
import ZoomOutMapIcon from '@mui/icons-material/ZoomOutMap'
import RotateRightIcon from '@mui/icons-material/RotateRight'
import AddBoxIcon from '@mui/icons-material/AddBox'
import Switch, { type SwitchProps } from '@mui/material/Switch'
import { InputColor, type Props as InputColorProps } from '../../../InputColor'
import { useEditValue, useSetEditState } from '../../../../lib/hooks/edit'
import { createRandomId } from '../../../../lib/util'
import { Slider, type Props as SliderProps } from '../Slider'

export type Props = {
  handleOnCrop: CropHandler
  handleOnAddShape: (id: string, color: string) => void
  onChangeScale: SliderProps['handleSliderChange']
  onChangeCopyright: (copyrightFlag: boolean) => void
  onChangeCopyrightFontSize: (fontSize: number) => void
  onChangeCopyrightColor: (color: string) => void
  onChangeRotate: SliderProps['handleSliderChange']
  onChangeCrop: CropHandler
}

export function ToolBar(props: Props) {
  const { cropStart, cropDone, setScale, setCopyrightColor, copyrightOn, copyrightOff, cropRemove, setCopyrightFontSize, setRotate, addShape } = useSetEditState()
  const { cropState, scale, rotate, copyrightColor, copyrightFontSize, copyrightFlag } = useEditValue()

  const handleOnCropStart = useCallback(() => {
    const res = cropStart()
    props.handleOnCrop({ state: res.cropState, cropFlag: res.cropFlag })
  }, [cropStart, props])

  const handleOnDone = useCallback(() => {
    const res = cropDone()
    props.handleOnCrop({ state: res.cropState, cropFlag: res.cropFlag })
  }, [cropDone, props])

  const handleOnRemove = useCallback(() => {
    cropRemove(props.handleOnCrop)
  }, [cropRemove, props.handleOnCrop])

  const handleScaleChange = useCallback<SliderProps['handleSliderChange']>(
    (newScale) => {
      setScale(newScale)
      props.onChangeScale(newScale)
    },
    [props, setScale]
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
  
  const handleRotateChange = useCallback<SliderProps['handleSliderChange']>(
    (newRotate) => {
      setRotate(newRotate)
      props.onChangeRotate(newRotate)
      cropRemove(props.onChangeCrop)
    },
    [cropRemove, props, setRotate]
  )

  const handleOnAddShape = useCallback(() => {
    const id = createRandomId()
    const color = '#000000'
    addShape(id, color)
    props.handleOnAddShape(id, color)
  }, [addShape, props])

  return (
    <Stack direction="row" spacing={1}>
      <Stack direction="row" spacing={1}>
        <Stack>
          <Button variant="outlined" onClick={handleOnCropStart}>
            <CropIcon />
          </Button>
          <Stack direction="row" spacing={1}>
            {cropState === 'start' && (
              <IconButton color="primary" aria-label="crop start" component="span" onClick={handleOnDone}>
                <DoneIcon />
              </IconButton>
            )}
            {cropState === 'start' && (
              <IconButton color="primary" aria-label="crop end" component="span" onClick={handleOnRemove}>
                <DeleteIcon />
              </IconButton>
            )}
          </Stack>
        </Stack>
        <Button variant="outlined" onClick={handleOnAddShape}>
          <AddBoxIcon />
        </Button>
      </Stack>
      <Divider orientation="vertical" flexItem />
      <Stack direction="row" alignItems="center" sx={{ minWidth: '400px' }}>
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
      </Stack>
      <Divider orientation="vertical" flexItem />
      <Stack sx={{ minWidth: '400px' }} spacing={1} direction="row" alignItems="center">
        <ZoomOutMapIcon />
        <Slider
          value={scale}
          min={1}
          max={100}
          sliderStep={10}
          step={1}
          handleSliderChange={handleScaleChange}
        />
      </Stack>
      <Divider orientation="vertical" flexItem />
      <Stack sx={{ minWidth: '400px' }} spacing={1} direction="row" alignItems="center">
        <RotateRightIcon />
        <Slider
          value={rotate}
          min={-180}
          max={180}
          sliderStep={15}
          step={1}
          handleSliderChange={handleRotateChange}
        />
      </Stack>
    </Stack>
  )
}