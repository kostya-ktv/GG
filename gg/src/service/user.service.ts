import { AxiosResponse } from "axios"
import { API } from "../api/API"
import { User } from "../types"

export const fetchUserByLogin = async (login: string):Promise<AxiosResponse<User>> => {
   return await API.get<User>(`/users/${login}`)
} 