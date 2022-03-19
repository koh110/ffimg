import { atom, useRecoilValue, useSetRecoilState } from 'recoil'

type State = {
  scale: number
  rotate: number
  copyrightColor: string | fabric.Pattern | fabric.Gradient
  copyrightFontSize: number
}

const editState = atom<State>({
  key: 'editState',
  default: {
    scale: 100,
    rotate: 0,
    copyrightFontSize: 15,
    copyrightColor: '#FFFFFF'
  }
})

export const useEditValue = () => {
  return useRecoilValue(editState)
}

export const useSetEditState = () => {
  const setEditState = useSetRecoilState(editState)

  return {
    setScale: (scale: number) => setEditState((old) => ({ ...old, scale })),
    setRotate: (rotate: number) => setEditState((old) => ({ ...old, rotate })),
    setCopyrightFontSize: (copyrightFontSize: number) => setEditState((old) => ({ ...old, copyrightFontSize })),
    setCopyrightColor: (copyrightColor: State['copyrightColor']) => setEditState((old) => ({ ...old, copyrightColor }))
  } as const
}
