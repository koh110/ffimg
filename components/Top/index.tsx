'use client'
import dynamic from 'next/dynamic'
import { RecoilRoot } from 'recoil'
import { useState, useCallback } from 'react'
import { DefaultTop, type Props as TopProps } from './DefaultTop'

const Edit = dynamic(() => import('./Edit'), { ssr: false })

export default function Top() {
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
    <RecoilRoot>
      {editFlag && file && <Edit file={file} fileName={fileName} onBack={onBack} />}
      {!editFlag && <DefaultTop file={file} onLoadFile={onLoadFile} onEdit={onEdit} />}
    </RecoilRoot>
  )
}
