import { atom, useRecoilValue, useSetRecoilState } from 'recoil'
import type { fabric } from 'fabric'

type State = {
  scale: number
  rotate: number
  copyrightColor: string | fabric.Pattern | fabric.Gradient
  copyrightFontSize: number
  shape: string[]
  shapeColor: string
  shapeOpacity: number
  blur: string[]
}

const editState = atom<State>({
  key: 'editState',
  default: {
    scale: 100,
    rotate: 0,
    copyrightFontSize: 15,
    copyrightColor: '#FFFFFF',
    shape: [],
    shapeColor: '#000000',
    shapeOpacity: 1,
    blur: []
  }
})

export const useEditValue = () => {
  return useRecoilValue(editState)
}

export const useSetEditState = () => {
  const setEditState = useSetRecoilState(editState)

  const addShapeArray = (param: 'shape' | 'blur') => {
    return (add: string) => {
      setEditState((old) => ({ ...old, [param]: [...old[param], add] }))
    }
  }

  const removeShapeArray = (param: 'shape' | 'blur') => {
    return (index: number) => {
      setEditState((old) => ({ ...old, [param]: [...old[param].slice(0, index), ...old[param].slice(index + 1)] }))
    }
  }

  return {
    setScale: (scale: number) => setEditState((old) => ({ ...old, scale })),
    setRotate: (rotate: number) => setEditState((old) => ({ ...old, rotate })),
    setCopyrightFontSize: (copyrightFontSize: number) => setEditState((old) => ({ ...old, copyrightFontSize })),
    setCopyrightColor: (copyrightColor: State['copyrightColor']) => setEditState((old) => ({ ...old, copyrightColor })),
    addBlur: addShapeArray('blur'),
    removeBlur: removeShapeArray('blur'),
    addShape: addShapeArray('shape'),
    removeShape: removeShapeArray('shape'),
    setShapeColor: (color: string) => setEditState((old) => ({ ...old, shapeColor: color })),
    setShapeOpacity: (opacity: number) => setEditState((old) => ({ ...old, shapeOpacity: opacity }))
  } as const
}
