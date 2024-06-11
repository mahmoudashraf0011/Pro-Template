import useDeleteData from "../../../hooks/useDeleteData";
import { useGetDataWithToken } from "../../../hooks/useGetData";
import { usePostData } from "../../../hooks/usePostData";
import { usePutDate } from "../../../hooks/useUpdateData";
import { DELETE_CURRENT_USER, GET_LOGGED_USER, UPDATE_USER_DATA, UPDATE_USER_PASS } from "../../type";


const getLoggedUserAction =  ()=> async (dispatch)=>{
    try{
        const response=await useGetDataWithToken(`/api/v1/users/getMe`);
        dispatch({
            type:GET_LOGGED_USER,
            payload:response,
            loading:true

        })
    }
    catch(e){
        dispatch({
            type:GET_LOGGED_USER,
            payload:e.response,
        })
    }
}

const deleteCurrentUserAction =  ()=> async (dispatch)=>{
    try{
        const response=await useDeleteData(`/api/v1/users/deleteMe`);
        dispatch({
            type:DELETE_CURRENT_USER,
            payload:response,
            loading:true

        })
    }
    catch(e){
        dispatch({
            type:DELETE_CURRENT_USER,
            payload:e.response,
        })
    }
}

const updateUserDataAction=  (data)=> async (dispatch)=>{
    try{
        const response=await usePutDate(`/api/v1/users/updateMe`,data);
        dispatch({
            type:UPDATE_USER_DATA,
            payload:response,
            loading:true

        })
    }
    catch(e){
        dispatch({
            type:UPDATE_USER_DATA,
            payload:e.response,
        })
    }
}

const updateUserPassAction=  (data)=> async (dispatch)=>{
    try{
        const response=await usePutDate(`/api/v1/users/changeMyPassword`,data);
        dispatch({
            type:UPDATE_USER_PASS,
            payload:response,
            loading:true

        })
    }
    catch(e){
        dispatch({
            type:UPDATE_USER_PASS,
            payload:e.response,
        })
    }
}

export {getLoggedUserAction,deleteCurrentUserAction,updateUserDataAction,updateUserPassAction}
