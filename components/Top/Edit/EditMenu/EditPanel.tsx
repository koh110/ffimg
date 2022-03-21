import React, { useCallback } from 'react'
import Divider from '@mui/material/Divider'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import CropIcon from '@mui/icons-material/Crop'
import DoneIcon from '@mui/icons-material/Done'
import DeleteIcon from '@mui/icons-material/Delete'
import IconButton from '@mui/material/IconButton'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import { useEditValue, useSetEditState } from '../../../../lib/hooks/edit'
import { useEditUIValue, useSetEditUIState } from '../../../../lib/hooks/edit/ui'
import { CropHandler } from '../../../../lib/type'

export type Props = {
  handleOnBlur: (id: string) => void
  handleOnSelectBlur: (id: string) => void
  handleOnDeleteBlur: (id: string, index: number) => void
  handleOnCrop: CropHandler
}

export const EditPanel: React.FC<Props> = (props) => {
  const { blur } = useEditValue()
  const { addBlur, removeBlur } = useSetEditState()
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

  const handleOnBlur = useCallback(() => {
    const id = window.crypto.randomUUID ? window.crypto.randomUUID() : `${Math.random() * Number.MAX_VALUE}`
    addBlur(id)
    props.handleOnBlur(id)
  }, [addBlur, props])

  const handleOnDeleteBlur = useCallback<Props['handleOnDeleteBlur']>((id, number) => {
    removeBlur(number)
    props.handleOnDeleteBlur(id, number)
  }, [props, removeBlur])

  return (
    <Stack spacing={1} divider={<Divider flexItem />}>
      <Stack direction="row" spacing={1}>
        <List>
          <ListItemButton>
            <ListItemText primary="ぼかし追加" onClick={handleOnBlur} />
          </ListItemButton>
          {
            blur.map((e, i) => {
              return (
                <ListItem key={e} secondaryAction={
                  <IconButton color="primary" component="span" onClick={() => handleOnDeleteBlur(e, i)}>
                    <DeleteIcon />
                  </IconButton>
                }>
                  <ListItemButton onClick={() => props.handleOnSelectBlur(e)}>
                    <ListItemText primary={`ぼかし ${i+1}`} />
                  </ListItemButton>
                </ListItem>
              )
            })
          }
        </List>
      </Stack>
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
