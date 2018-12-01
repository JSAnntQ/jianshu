import { actionTypes } from './index'

export const actionFocus = ()=>{
  return (
    {
      type: actionTypes.CHANGE_FOCUS
    }
  )
}

export const actionBlur = ()=>{
  return (
    {
      type: actionTypes.CHANGE_BLUR
    }
  )
}