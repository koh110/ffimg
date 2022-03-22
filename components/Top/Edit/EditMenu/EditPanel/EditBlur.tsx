import React, { useCallback } from 'react'
import Stack from '@mui/material/Stack'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import DeleteIcon from '@mui/icons-material/Delete'
import IconButton from '@mui/material/IconButton'
import { createRandomId } from '../../../../../lib/util'
import { useEditValue, useSetEditState } from '../../../../../lib/hooks/edit'

export type Props = {
  handleOnBlur: (id: string) => void
  handleOnSelectBlur: (id: string) => void
  handleOnDeleteBlur: (id: string, index: number) => void
}

export const EditBlur: React.FC<Props> = (props) => {
  const { blur } = useEditValue()
  const { addBlur, removeBlur } = useSetEditState()

  const handleOnBlur = useCallback(() => {
    const id = createRandomId()
    addBlur(id)
    props.handleOnBlur(id)
  }, [addBlur, props])

  const handleOnDeleteBlur = useCallback<Props['handleOnDeleteBlur']>(
    (id, number) => {
      removeBlur(number)
      props.handleOnDeleteBlur(id, number)
    },
    [props, removeBlur]
  )

  return (
    <Stack direction="row" spacing={1}>
      <List>
        <ListItemButton>
          <ListItemText primary="ぼかし追加" onClick={handleOnBlur} />
        </ListItemButton>
        {blur.map((e, i) => {
          return (
            <ListItem
              key={e}
              dense={true}
              secondaryAction={
                <IconButton color="primary" component="span" onClick={() => handleOnDeleteBlur(e, i)}>
                  <DeleteIcon />
                </IconButton>
              }
            >
              <ListItemButton onClick={() => props.handleOnSelectBlur(e)}>
                <ListItemText primary={`ぼかし ${i + 1}`} />
              </ListItemButton>
            </ListItem>
          )
        })}
      </List>
    </Stack>
  )
}
