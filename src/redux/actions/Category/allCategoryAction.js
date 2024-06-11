import useDeleteData from "../../../hooks/useDeleteData";
import {useGetData} from "../../../hooks/useGetData";
import { usePostDataWithDifferentFormat } from "../../../hooks/usePostData";
import { usePutDataWithDifferentFormat } from "../../../hooks/useUpdateData";
import { Add_Category, DELETE_CATEGORY, GET_SPECIFIC_CATEGORY, Get_All_Catagory,Get_Error, UPDATE_CATEGORY } from "../../type";

 const allCategoryAction =  (limit)=> async (dispatch)=>{
        try{
            const response=await useGetData(`api/v1/categories?limit=${limit}`);
            dispatch({
                type:Get_All_Catagory,
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
 const getPagesAction =  (Count)=> async (dispatch)=>{
    try{
        const response=await useGetData(`api/v1/categories?limit=8&page=${Count}`);
        dispatch({
            type:Get_All_Catagory,
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


const addCategoryAction =  (formData)=> async (dispatch)=>{
    try{
        const response=await usePostDataWithDifferentFormat(`api/v1/categories`,formData);
        dispatch({
            type:Add_Category,
            payload:response,
            loading:true

        })
    }
    catch(e){
        dispatch({
            type:Get_Error,
            payload:"Erro"+ e,
        })
    }


}

const getSpecificCategoryAction =  (id)=> async (dispatch)=>{
    try{
        const response=await useGetData(`/api/v1/categories/${id}`);
        dispatch({
            type:GET_SPECIFIC_CATEGORY,
            payload:response
        })
    }
    catch(e){
        dispatch({
            type:GET_SPECIFIC_CATEGORY,
            payload:e.response,
        })
    }


}
const deleteCategoryAction=(id)=> async (dispatch)=>{
    try{
        const response=await useDeleteData(`/api/v1/categories/${id}`);
        dispatch({
            type:DELETE_CATEGORY,
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

const updateCategoryAction =  (id,data)=> async (dispatch)=>{
    try{
        const response=await usePutDataWithDifferentFormat(`/api/v1/categories/${id}`,data);
        dispatch({
            type:UPDATE_CATEGORY,
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

const getCategoriesPagesAction =  (id,page)=> async (dispatch)=>{
    try{
        const response=await useGetData(`/api/v1/categories?limit=${id}&page=${page}`);
        dispatch({

            type:Get_All_Catagory,
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

export {allCategoryAction , getPagesAction,addCategoryAction,getSpecificCategoryAction,deleteCategoryAction,updateCategoryAction,getCategoriesPagesAction};