import React, { useRef, useCallback } from 'react'
import debounce from 'lodash.debounce'
import MuiInput, { InputProps } from '@mui/material/Input'

export type Props = {
  disabled: InputProps['disabled']
  value: InputProps['value']
  onChange: (color: string) => void
}

export const InputColor: React.FC<Props> = (props) => {
  const onChangeDebounce = useRef(
    debounce((e) => {
      if (props.onChange) {
        props.onChange(e)
      }
    }, 100)
  )

  const onChange = useCallback<NonNullable<InputProps['onChange']>>((e) => {
    onChangeDebounce.current(e.currentTarget.value)
  }, [])

  return (
    <MuiInput
      disabled={props.disabled}
      type="color"
      sx={{ width: '2em', minWidth: '32px' }}
      value={props.value}
      onChange={onChange}
    />
  )
}
