import { LOGIN, SIGNUP } from "./actionType"

export const login = (payload) => {
   return{
    type: LOGIN,
    payload
   }
}
export const signup = (payload) => {
   return{
    type: SIGNUP,
    payload
   }
}