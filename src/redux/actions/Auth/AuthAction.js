import { usePostData } from '../../../hooks/usePostData';
import { usePutDate } from '../../../hooks/useUpdateData';
import { CREATE_USER, FORGET_PASS, LOGIN_USER, REST_PASS, VERIFY_PASS } from '../../type';
const createUserAction =  (data)=> async (dispatch)=>{
    try{
        const response=await usePostData(`/api/v1/auth/signup`,data);
        dispatch({
            type:CREATE_USER,
            payload:response,
            loading:true

        })
    }
    catch(e){
        dispatch({
            type:CREATE_USER,
            payload:e.response
        })
    }


}

const loginUserAction =  (data)=> async (dispatch)=>{
    try{
        const response=await usePostData(`/api/v1/auth/login`,data);
        dispatch({
            type:LOGIN_USER,
            payload:response,
            loading:true

        })
    }
    catch(e){
        dispatch({
            type:LOGIN_USER,
            payload:e.response
        })
    }


}

const forgetPassAction =  (data)=> async (dispatch)=>{
    try{
        const response=await usePostData(`/api/v1/auth/forgotPasswords`,data);
        dispatch({
            type:FORGET_PASS,
            payload:response,
            loading:true

        })
    }
    catch(e){
        dispatch({
            type:FORGET_PASS,
            payload:e.response
        })
    }


}
const verityPassAction =  (data)=> async (dispatch)=>{
    try{
        const response=await usePostData(`/api/v1/auth/verifyResetCode`,data);
        dispatch({
            type:VERIFY_PASS,
            payload:response,
            loading:true

        })
    }
    catch(e){
        dispatch({
            type:VERIFY_PASS,
            payload:e.response
        })
    }


}
const restPassAction =  (data)=> async (dispatch)=>{
    try{
        const response=await usePutDate(`/api/v1/auth/resetPassword`,data);
        dispatch({
            type:REST_PASS,
            payload:response,
            loading:true

        })
    }
    catch(e){
        dispatch({
            type:REST_PASS,
            payload:e.response
        })
    }


}

export {createUserAction,loginUserAction,forgetPassAction,verityPassAction,restPassAction}

