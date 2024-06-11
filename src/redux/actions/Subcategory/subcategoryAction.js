import useDeleteData from "../../../hooks/useDeleteData";
import {useGetData} from "../../../hooks/useGetData";
import { usePostData } from "../../../hooks/usePostData";
import { usePutDataWithDifferentFormat, usePutDate } from "../../../hooks/useUpdateData";
import { Add_Subcategory,DELETE_SUBCATEGORY,GET_ALL_SUBCATEGORY,GET_ALL_SUBCATEGORY_For_CATEGORY,GET_SPECIFIC_SUBCATEGORY,Get_Error, UPDATE_SUBCATEGORY } from "../../type";

const getAllSubcategoriesAction =  (id)=> async (dispatch)=>{
    try{
        const response=await useGetData(`/api/v1/subcategories?limit=${id}`);
        dispatch({
            type:GET_ALL_SUBCATEGORY,
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

const getSpecificSubcategoriesAction =  (id)=> async (dispatch)=>{
    try{
        const response=await useGetData(`/api/v1/subcategories/${id}`);
        dispatch({
            type:GET_SPECIFIC_SUBCATEGORY,
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

const getSubCategoriesPagesAction =  (id,page)=> async (dispatch)=>{
    try{
        const response=await useGetData(`/api/v1/subcategories?limit=${id}&page=${page}`);
        dispatch({

            type:GET_ALL_SUBCATEGORY,
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

const getAllSubCAtegoryForCategoryAction =  (id)=> async (dispatch)=>{
    try{
        const response=await useGetData(`/api/v1/categories/${id}/subcategories`);
        dispatch({
            type:GET_ALL_SUBCATEGORY_For_CATEGORY,
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

const addSubCategoryAction =  (data)=> async (dispatch)=>{
    try{
        const response=await usePostData(`/api/v1/subcategories`,data);
        dispatch({
            type:Add_Subcategory,
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

const deleteSubcategoryAction=(id)=> async (dispatch)=>{
    try{
        const response=await useDeleteData(`/api/v1/subcategories/${id}`);
        dispatch({
            type:DELETE_SUBCATEGORY,
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

const updateSubcategoryAction =  (id,data)=> async (dispatch)=>{
    try{
        const response=await usePutDate(`/api/v1/subcategories/${id}`,data);
        dispatch({
            type:UPDATE_SUBCATEGORY,
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
export {addSubCategoryAction,getAllSubCAtegoryForCategoryAction,getAllSubcategoriesAction,getSpecificSubcategoriesAction,getSubCategoriesPagesAction,deleteSubcategoryAction,updateSubcategoryAction}