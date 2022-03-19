import React from 'react'
import Stack from '@mui/material/Stack'
import CropIcon from '@mui/icons-material/Crop'
import DoneIcon from '@mui/icons-material/Done'
import DeleteIcon from '@mui/icons-material/Delete'
import IconButton, { IconButtonProps } from '@mui/material/IconButton'

export type Props = {
  onFlag: boolean
  handleOnClopStart: IconButtonProps['onClick']
  handleOnDone: IconButtonProps['onClick']
  handleOnRemove: IconButtonProps['onClick']
}

export const EditPanel: React.FC<Props> = (props) => {
  return (
    <>
      <Stack direction="row" spacing={1}>
        <IconButton color="primary" aria-label="upload picture" component="span" onClick={props.handleOnClopStart}>
          <CropIcon />
        </IconButton>
        {props.onFlag && (
          <IconButton color="primary" aria-label="upload picture" component="span" onClick={props.handleOnDone}>
            <DoneIcon />
          </IconButton>
        )}
        {props.onFlag && (
          <IconButton
            color="primary"
            aria-label="upload picture"
            component="span"
            onClick={props.handleOnRemove}
          >
            <DeleteIcon />
          </IconButton>
        )}
      </Stack>
    </>
  )
}