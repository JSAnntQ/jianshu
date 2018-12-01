import { actionTypes } from './index'
import { fromJS } from  'immutable'

const defaultState = fromJS({
  focused: false
}) 

export default ( state = defaultState, action )=>{
  switch (action.type){
    case actionTypes.CHANGE_FOCUS: 
      // return ({
      //   focused: true
      // })
      return state.set('focused',true)
    case actionTypes.CHANGE_BLUR: 
      return state.set('focused',false)
    default:
      return state
  }
}