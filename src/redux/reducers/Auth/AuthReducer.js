import { CREATE_USER, FORGET_PASS, LOGIN_USER, REST_PASS, VERIFY_PASS } from "../../type";

const initial ={
    createUser:[],
    loginUser:[],
    forgetPass:[],
    verityPass:[],
    restPass:[],
    loading:false
}

export const AuthReducer=(state=initial,action)=>{
    switch(action.type){
        case CREATE_USER:
            return{
                    ...state,
                    createUser:action.payload,
                    loading:false
                }
        case LOGIN_USER:
            return{
                    ...state,
                    loginUser:action.payload,
                    loading:false
                }
        case FORGET_PASS:
            return{
                    ...state,
                    forgetPass:action.payload,
                    loading:false
                }
        case VERIFY_PASS:
            return{
                    ...state,
                    verityPass:action.payload,
                    loading:false
                }
        case REST_PASS:
            return{
                    ...state,
                    restPass:action.payload,
                    loading:false
                }
        default:
            return state;
    }
}

