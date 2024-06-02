import useDeleteData from "../../../hooks/useDeleteData";
import useGetData from "../../../hooks/useGetData";
import { usePostDataWithDifferentFormat } from "../../../hooks/usePostData";
import { usePutDataWithDifferentFormat } from "../../../hooks/useUpdateData";
import { Add_Brand, DELETE_BRAND, GET_SPECIFIC_BRAND, Get_All_Brand,Get_Error, UPDATE_BRAND } from "../../type";

 const allBrandAction =  (limit)=> async (dispatch)=>{
        try{
            const response=await useGetData(`/api/v1/brands?limit=${limit}`);
            dispatch({
                type:Get_All_Brand,
                payload:response
            })
        }
        catch(e){
            dispatch({
                type:Get_Error,
                payload:"Error" + e,
            })
        }

    
}
 const getPagesBrandAction =  (Count)=> async (dispatch)=>{
    try{
        const response=await useGetData(`/api/v1/brands?limit=10&page=${Count}`);
        dispatch({
            type:Get_All_Brand,
            payload:response
        })
    }
    catch(e){
        dispatch({
            type:Get_Error,
            payload:"Error" + e,
        })
    }


}


const addBrandAction =  (formData)=> async (dispatch)=>{
    try{
        const response=await usePostDataWithDifferentFormat(`/api/v1/brands`,formData);
        dispatch({
            type:Add_Brand,
            payload:response,
            loading:true

        })
    }
    catch(e){
        dispatch({
            type:Get_Error,
            payload:"Error" + e,
        })
    }


}

const getSpecificBrandAction=  (id)=> async (dispatch)=>{
    try{
        const response=await useGetData(`/api/v1/brands/${id}`);
        dispatch({
            type:GET_SPECIFIC_BRAND,
            payload:response
        })
    }
    catch(e){
        dispatch({
            type:Get_Error,
            payload:"Error" + e,
        })
    }


}

const deleteBrandAction=(id)=> async (dispatch)=>{
    try{
        const response=await useDeleteData(`/api/v1/brands/${id}`);
        dispatch({
            type:DELETE_BRAND,
            payload:response,

        })
    }
    catch(e){
        dispatch({
            type:Get_Error,
            payload:"Error" + e,
        })
    }


}

const updateBrandAction =  (id,data)=> async (dispatch)=>{
    try{
        const response=await usePutDataWithDifferentFormat(`/api/v1/brands/${id}`,data);
        dispatch({
            type:UPDATE_BRAND,
            payload:response
        })
    }
    catch(e){
        dispatch({
            type:Get_Error,
            payload:"Error" + e,
        })
    }


}

const getBrandsPagesAction =  (id,page)=> async (dispatch)=>{
    try{
        const response=await useGetData(`/api/v1/brands?limit=${id}&page=${page}`);
        dispatch({

            type:Get_All_Brand,
            payload:response
        })
    }
    catch(e){
        dispatch({
            type:Get_Error,
            payload:"Error" + e,
        })
    }


}

export {allBrandAction ,getPagesBrandAction,addBrandAction,getSpecificBrandAction,deleteBrandAction,updateBrandAction,getBrandsPagesAction };