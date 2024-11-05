import { atom, useRecoilValue, useSetRecoilState } from 'recoil'
import { CropState, CropHandler } from '../../type'

type State = {
  scale: number
  rotate: number
  copyrightColor: string
  copyrightFontSize: number
  shape: string[]
  shapeData: {
    [key: string]: {
      color: string
      opacity: number
    }
  }
  blur: string[]
  cropFlag: boolean
  cropState: CropState
  copyrightFlag: boolean
}

const editState = atom<State>({
  key: 'editState',
  default: {
    scale: 100,
    rotate: 0,
    copyrightFontSize: 15,
    copyrightColor: '#FFFFFF',
    shape: [],
    shapeData: {},
    blur: [],
    cropFlag: false,
    cropState: 'none',
    copyrightFlag: false
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
    addShape: (add: string, color: string) => {
      setEditState((old) => ({
        ...old,
        shape: [...old.shape, add],
        shapeData: {
          ...old.shapeData,
          [add]: {
            color,
            opacity: 1
          }
        }
      }))
    },
    removeShape: (index: number) => {
      setEditState((old) => {
        const id = old.shape[index]
        const { [id]: _, ...others } = old.shapeData
        return {
          ...old,
          shape: [...old.shape.slice(0, index), ...old.shape.slice(index + 1)],
          shapeData: others
        }
      })
    },
    setShapeColor: (id: string, color: string) => {
      setEditState((old) => {
        const shapeData = { ...old.shapeData }
        shapeData[id] = {
          color,
          opacity: shapeData[id].opacity
        }
        return { ...old, shapeData }
      })
    },
    setShapeOpacity: (id: string, opacity: number) => {
      setEditState((old) => {
        const shapeData = { ...old.shapeData }
        shapeData[id] = {
          color: shapeData[id].color,
          opacity
        }
        return { ...old, shapeData }
      })
    },
    cropStart: () => {
      const cropFlag = true
      const cropState: CropState = 'start'
      setEditState((old) => ({ ...old, cropFlag, cropState }))
      return { cropFlag, cropState }
    },
    cropDone: () => {
      const cropFlag = true
      const cropState: CropState = 'done'
      setEditState((old) => ({ ...old, cropFlag: true, cropState: 'done' }))
      return { cropFlag, cropState }
    },
    cropRemove: (handler: CropHandler) =>
      setEditState((old) => {
        if (!old.cropFlag) {
          return old
        }
        handler({ state: 'none', cropFlag: false })
        return {
          ...old,
          cropFlag: false,
          cropState: 'none'
        }
      }),
    copyrightOn: () => setEditState((old) => ({ ...old, copyrightFlag: true })),
    copyrightOff: () => setEditState((old) => ({ ...old, copyrightFlag: false }))
  } as const
}
