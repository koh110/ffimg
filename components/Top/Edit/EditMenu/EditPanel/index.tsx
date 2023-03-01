import { useCallback } from 'react'
import Divider from '@mui/material/Divider'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import CropIcon from '@mui/icons-material/Crop'
import DoneIcon from '@mui/icons-material/Done'
import DeleteIcon from '@mui/icons-material/Delete'
import IconButton from '@mui/material/IconButton'
import { useEditValue, useSetEditState } from '../../../../../lib/hooks/edit'
import { CropHandler } from '../../../../../lib/type'
import { FEATURE_FLAGS } from '../../../../../lib/constants'
import { EditBlur, Props as EditBlurProps } from './EditBlur'
import { Shape, Props as ShapeProps } from './Shape'

export type Props = {
  handleOnBlur: EditBlurProps['handleOnBlur']
  handleOnSelectBlur: EditBlurProps['handleOnSelectBlur']
  handleOnDeleteBlur: EditBlurProps['handleOnDeleteBlur']
  handleOnShape: ShapeProps['handleOnAddShape']
  handleOnChangeColorShape: ShapeProps['handleOnChangeColorShape']
  handleOnChangeOpacityShape: ShapeProps['handleOnChangeOpacityShape']
  handleOnSelectShape: ShapeProps['handleOnSelectShape']
  handleOnDeleteShape: ShapeProps['handleOnDeleteShape']
  handleOnCrop: CropHandler
}

export function EditPanel(props: Props) {
  const { cropState } = useEditValue()
  const { cropStart, cropDone, cropRemove } = useSetEditState()

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

  return (
    <Stack spacing={1} divider={<Divider flexItem />}>
      {FEATURE_FLAGS.blur && (
        <EditBlur
          handleOnBlur={props.handleOnBlur}
          handleOnSelectBlur={props.handleOnSelectBlur}
          handleOnDeleteBlur={props.handleOnDeleteBlur}
        />
      )}
      <Shape
        handleOnAddShape={props.handleOnShape}
        handleOnChangeColorShape={props.handleOnChangeColorShape}
        handleOnChangeOpacityShape={props.handleOnChangeOpacityShape}
        handleOnSelectShape={props.handleOnSelectShape}
        handleOnDeleteShape={props.handleOnDeleteShape}
      />
      <Stack direction="row" spacing={1}>
        <Button variant="outlined" onClick={handleOnCropStart} startIcon={<CropIcon />}>
          切り抜く
        </Button>
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
  )
}
