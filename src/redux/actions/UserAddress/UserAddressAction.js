import useDeleteData from "../../../hooks/useDeleteData";
import { useGetDataWithToken } from "../../../hooks/useGetData";
import { usePostData } from "../../../hooks/usePostData";
import { usePutDate } from "../../../hooks/useUpdateData";
import { CREATE_ADDRESS, DELETE_ADDRESS, GET_ALL_ADDRESSES, GET_SPECIFIC_ADDRESS, UPDATE_ADDRESS } from "../../type"


const getAllAddresssesAction =  ()=> async (dispatch)=>{
    try{
        const response=await useGetDataWithToken(`/api/v1/addresses`);
        dispatch({
            type:GET_ALL_ADDRESSES,
            payload:response,
            loading:true

        })
    }
    catch(e){
        dispatch({
            type:GET_ALL_ADDRESSES,
            payload:e.response,
        })
    }
}

const getSpecificAddressAction =  (id)=> async (dispatch)=>{
    try{
        const response=await useGetDataWithToken(`/api/v1/addresses/${id}`);
        dispatch({
            type:GET_SPECIFIC_ADDRESS,
            payload:response,
            loading:true

        })
    }
    catch(e){
        dispatch({
            type:GET_SPECIFIC_ADDRESS,
            payload:e.response,
        })
    }
}

const createAddressAction =  (data)=> async (dispatch)=>{
    try{
        const response=await usePostData(`/api/v1/addresses`,data);
        dispatch({
            type:CREATE_ADDRESS,
            payload:response,
            loading:true

        })
    }
    catch(e){
        dispatch({
            type:CREATE_ADDRESS,
            payload:e.response,
        })
    }
}

const deleteAddressAction =  (id)=> async (dispatch)=>{
    try{
        const response=await useDeleteData(`/api/v1/addresses/${id}`);
        dispatch({
            type:DELETE_ADDRESS,
            payload:response,
            loading:true

        })
    }
    catch(e){
        dispatch({
            type:DELETE_ADDRESS,
            payload:e.response,
        })
    }
}

const updateAddressAction=  (id,data)=> async (dispatch)=>{
    try{
        const response=await usePutDate(`/api/v1/addresses/${id}`,data);
        dispatch({
            type:UPDATE_ADDRESS,
            payload:response,
            loading:true

        })
    }
    catch(e){
        dispatch({
            type:UPDATE_ADDRESS,
            payload:e.response,
        })
    }
}

export {getAllAddresssesAction,getSpecificAddressAction,createAddressAction,deleteAddressAction,updateAddressAction}
