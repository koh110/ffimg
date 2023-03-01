import { atom, useRecoilValue, useSetRecoilState } from 'recoil'

type State = {
  openModalFlag: boolean
}

const editUIState = atom<State>({
  key: 'editUIState',
  default: {
    openModalFlag: false
  }
})

export const useEditUIValue = () => {
  return useRecoilValue(editUIState)
}

export const useSetEditUIState = () => {
  const setState = useSetRecoilState(editUIState)

  return {
    openModal: () => setState((old) => ({ ...old, openModalFlag: true })),
    closeModal: () => setState((old) => ({ ...old, openModalFlag: false }))
  } as const
}
