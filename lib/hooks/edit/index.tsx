import { atom, useRecoilValue, useSetRecoilState } from 'recoil'
import type { fabric } from 'fabric'

type State = {
  scale: number
  rotate: number
  copyrightColor: string | fabric.Pattern | fabric.Gradient
  copyrightFontSize: number,
  blur: string[]
}

const editState = atom<State>({
  key: 'editState',
  default: {
    scale: 100,
    rotate: 0,
    copyrightFontSize: 15,
    copyrightColor: '#FFFFFF',
    blur: []
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
    setCopyrightColor: (copyrightColor: State['copyrightColor']) => setEditState((old) => ({ ...old, copyrightColor })),
    addBlur: (addBlur: string) => setEditState((old) => ({ ...old, blur: [...old.blur, addBlur]})),
    removeBlur: (index: number) => setEditState((old) => ({ ...old, blur: [...old.blur.slice(0, index), ...old.blur.slice(index + 1)]}))
  } as const
}
