import { useState, useCallback } from 'react'
import { DefaultTop, Props as TopProps } from './DefaultTop'
import { Edit } from './Edit'

export const Top = () => {
  const [fileName, setFileName] = useState('')
  const [file, setFile] = useState<string | undefined>(undefined)
  const [editFlag, setEditFlag] = useState<boolean>(false)

  const onLoadFile: TopProps['onLoadFile'] = useCallback((uploadFile, name) => {
    setFile(uploadFile)
    setFileName(name)
    setEditFlag(true)
  }, [])

  const onEdit = useCallback(() => {
    setEditFlag(true)
  }, [])

  const onBack = useCallback(() => {
    setEditFlag(false)
  }, [])

  return (
    <>
      {editFlag && file && <Edit file={file} fileName={fileName} onBack={onBack} />}
      {!editFlag && <DefaultTop file={file} onLoadFile={onLoadFile} onEdit={onEdit} />}
    </>
  )
}
