export type CropState = 'start' | 'done' | 'none'

type StateType = {
  state: CropState
  cropFlag: boolean
}

export type CropHandler = (state: StateType) => void
