import {FAIL_USER,LOGIN_USER,LOAD_USER,LOGOUT_USER,REGISTER_USER} from '../Constates/user'

const intialState={
    user:null,
    loadUser:false,
    errors:null,
    isAuth:false

}
export const userReducer=(state=intialState,{type,payload})=>{
    switch(type){
        case REGISTER_USER:
            localStorage.setItem("token",payload.token)
            return {...state,loadUser:false,user:payload.user,isAuth:true}
        case LOGIN_USER:
            localStorage.setItem("token",payload.token)
            return {...state,loadUser:false,user:payload.user,isAuth:true}
        case LOAD_USER:
            return {... state,loadUser:true}

        
        case FAIL_USER:
            return {... state,loadUser:false,errors:payload}
        
        default:
            return state
    }

}