import { atom, useRecoilValue, useSetRecoilState } from 'recoil'

import { CropState, CropHandler } from '../../type'

type State = {
  openModalFlag: boolean
  cropFlag: boolean
  cropState: CropState
  copyrightFlag: boolean
}

const editUIState = atom<State>({
  key: 'editUIState',
  default: {
    openModalFlag: false,
    cropFlag: false,
    cropState: 'none',
    copyrightFlag: false
  }
})

export const useEditUIValue = () => {
  return useRecoilValue(editUIState)
}

export const useSetEditUIState = () => {
  const setState = useSetRecoilState(editUIState)

  return {
    openModal: () => setState((old) => ({ ...old, openModalFlag: true })),
    closeModal: () => setState((old) => ({ ...old, openModalFlag: false })),
    cropStart: () => {
      const cropFlag = true
      const cropState: CropState = 'start'
      setState((old) => ({ ...old, cropFlag, cropState }))
      return { cropFlag, cropState }
    },
    cropDone: () => {
      const cropFlag = true
      const cropState: CropState = 'done'
      setState((old) => ({ ...old, cropFlag: true, cropState: 'done' }))
      return { cropFlag, cropState }
    },
    cropRemove: (handler: CropHandler) =>
      setState((old) => {
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
    copyrightOn: () => setState((old) => ({ ...old, copyrightFlag: true })),
    copyrightOff: () => setState((old) => ({ ...old, copyrightFlag: false }))
  } as const
}
