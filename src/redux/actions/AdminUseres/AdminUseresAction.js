import useDeleteData from "../../../hooks/useDeleteData";
import { useGetDataWithToken } from "../../../hooks/useGetData";
import { usePostData } from "../../../hooks/usePostData";
import { usePutDate } from "../../../hooks/useUpdateData";
import { ADMIN_CREATE_USER, ADMIN_DELETE_USER, ADMIN_GET_ALL_USERS, ADMIN_GET_SPECIFIC_USER, ADMIN_UPDATE_USER, ADMIN_UPDATE_USER_PASS } from "../../type"


const adminGetAllUsersAction =  (limit,page)=> async (dispatch)=>{
    try{
        const response=await useGetDataWithToken(`/api/v1/users?limit=${limit}&page=${page}`);
        dispatch({
            type:ADMIN_GET_ALL_USERS,
            payload:response,
            loading:true

        })
    }
    catch(e){
        dispatch({
            type:ADMIN_GET_ALL_USERS,
            payload:e.response,
        })
    }
}

const adminGetSpecificUserAction =  (id)=> async (dispatch)=>{
    try{
        const response=await useGetDataWithToken(`/api/v1/users/${id}`);
        dispatch({
            type:ADMIN_GET_SPECIFIC_USER,
            payload:response,
            loading:true

        })
    }
    catch(e){
        dispatch({
            type:ADMIN_GET_SPECIFIC_USER,
            payload:e.response,
        })
    }
}

const adminCreateUserAction =  (data)=> async (dispatch)=>{
    try{
        const response=await usePostData(`/api/v1/users`,data);
        dispatch({
            type:ADMIN_CREATE_USER,
            payload:response,
            loading:true

        })
    }
    catch(e){
        dispatch({
            type:ADMIN_CREATE_USER,
            payload:e.response,
        })
    }
}

const adminDeleteUserAction =  (id)=> async (dispatch)=>{
    try{
        const response=await useDeleteData(`/api/v1/users/${id}`);
        dispatch({
            type:ADMIN_DELETE_USER,
            payload:response,
            loading:true

        })
    }
    catch(e){
        dispatch({
            type:ADMIN_DELETE_USER,
            payload:e.response,
        })
    }
}

const adminUpdateUserAction=  (id,data)=> async (dispatch)=>{
    try{
        const response=await usePutDate(`/api/v1/users/${id}`,data);
        dispatch({
            type:ADMIN_UPDATE_USER,
            payload:response,
            loading:true

        })
    }
    catch(e){
        dispatch({
            type:ADMIN_UPDATE_USER,
            payload:e.response,
        })
    }
}

const adminUpdateUserPassAction=  (id,data)=> async (dispatch)=>{
    try{
        const response=await usePutDate(`/api/v1/users/change-password/${id}`,data);
        dispatch({
            type:ADMIN_UPDATE_USER_PASS,
            payload:response,
            loading:true

        })
    }
    catch(e){
        dispatch({
            type:ADMIN_UPDATE_USER_PASS,
            payload:e.response,
        })
    }
}
export {adminGetAllUsersAction,adminGetSpecificUserAction,adminCreateUserAction,adminDeleteUserAction,adminUpdateUserAction,adminUpdateUserPassAction}
