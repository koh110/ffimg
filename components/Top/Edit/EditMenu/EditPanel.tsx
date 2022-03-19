import React, { useCallback } from 'react'
import Stack from '@mui/material/Stack'
import CropIcon from '@mui/icons-material/Crop'
import DoneIcon from '@mui/icons-material/Done'
import DeleteIcon from '@mui/icons-material/Delete'
import IconButton from '@mui/material/IconButton'
import { useEditUIValue, useSetEditUIState } from '../../../../lib/hooks/edit/ui'
import { CropHandler } from '../../../../lib/type'

export type Props = {
  handleOnCrop: CropHandler
}

export const EditPanel: React.FC<Props> = (props) => {
  const { cropState } = useEditUIValue()
  const { cropStart, cropDone, cropRemove } = useSetEditUIState()

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
    <>
      <Stack direction="row" spacing={1}>
        <IconButton color="primary" aria-label="upload picture" component="span" onClick={handleOnCropStart}>
          <CropIcon />
        </IconButton>
        {cropState === 'start' && (
          <IconButton color="primary" aria-label="upload picture" component="span" onClick={handleOnDone}>
            <DoneIcon />
          </IconButton>
        )}
        {cropState === 'start' && (
          <IconButton color="primary" aria-label="upload picture" component="span" onClick={handleOnRemove}>
            <DeleteIcon />
          </IconButton>
        )}
      </Stack>
    </>
  )
}
