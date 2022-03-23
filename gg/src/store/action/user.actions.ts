import { Dispatch } from "redux";
import { fetchUserByLogin } from "../../service/user.service"
import { UserActionType } from "../../types";

export const fetchUserByLogin_action = async(login: string, dispatch: Dispatch) => {
   try {
      const response = await fetchUserByLogin(login) 
      dispatch<UserActionType>({type: "GET_USER", payload: response.data})
   } catch (error) {console.log(error)}
   
}