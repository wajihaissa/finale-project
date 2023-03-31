import {FAIL_USER,LOGIN_USER,LOAD_USER,LOGOUT_USER,REGISTER_USER} from '../Constates/user'
import axios from "axios"



export const registerUSer=(user)=>async (dispatch)=>{
dispatch({type:LOAD_USER});
try {
    const result= await axios.post("user/register", user)
    dispatch({type:REGISTER_USER,payload:result.data})
} catch (error) {
    dispatch({type:FAIL_USER,payload:error.response.data})
}
}
export const loginUSer=(user)=>async (dispatch)=>{
    dispatch({type:LOAD_USER});
    try {
        const result= await axios.post("user/login", user)
        dispatch({type:REGISTER_USER,payload:result.data})
    } catch (error) {
        dispatch({type:FAIL_USER,payload:error.response.data})
    }
    }
