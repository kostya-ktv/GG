import { User, UserActionType } from "../../../types"
import { UserInitialState } from "./userDefaultState"


export const userReducer = (state = UserInitialState, action: UserActionType):User => {
   switch (action.type) {
      case 'GET_USER': return {...state, ...action.payload}
      default: return state
   }
}