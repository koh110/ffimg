import { useRef, useCallback } from 'react'

export type Props = {
  onLoadFile: (file: string, fileName: string) => void
}

export const useFileReader = (props: Props) => {
  const fileInputRef = useRef<HTMLInputElement>(null)

  const onChange: React.ChangeEventHandler<HTMLInputElement> = useCallback(
    (e) => {
      if (!e.target.files || e.target.files.length < 1) {
        return
      }

      const reader = new FileReader()
      const file = e.target.files[0]
      reader.readAsDataURL(file)

      reader.onload = () => {
        if (reader.result) {
          const loadFile = reader.result as string
          props.onLoadFile(loadFile, file.name)
        }
        if (fileInputRef && fileInputRef.current) {
          fileInputRef.current.value = ''
        }
      }
    },
    [props]
  )

  return { ref: fileInputRef, onChange } as const
}
