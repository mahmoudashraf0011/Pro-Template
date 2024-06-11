import useDeleteData from "../../../hooks/useDeleteData";
import {useGetData} from "../../../hooks/useGetData";
import { usePostDataWithDifferentFormat } from "../../../hooks/usePostData";
import { usePutDataWithDifferentFormat } from "../../../hooks/useUpdateData";
import { ADD_PRODUCT,DELETE_PRODUCT,GET_ALL_PRODUCT,GET_ALL_PRODUCT_BY_BRAND,GET_ALL_PRODUCT_BY_CATEGORY,GET_ALL_PRODUCT_BY_SUBCATEGORY,GET_Best_Seller_PRODUCTS,GET_LIKE_PRODUCTS,GET_RATED_PRODUCTS,GET_SPECIFIC_PRODUCT,Get_All_Catagory_SEARCH,Get_All_PRODUCT_SEARCH,Get_Error, UPDATE_PRODUCT } from "../../type";

const addProductAction =  (data)=> async (dispatch)=>{
    try{
        const response=await usePostDataWithDifferentFormat(`/api/v1/products`,data);
        dispatch({
            type:ADD_PRODUCT,
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

const getAllProductsAction =  (id)=> async (dispatch)=>{
    try{
        const response=await useGetData(`/api/v1/products?limit=${id}`);
        dispatch({
            type:GET_ALL_PRODUCT,
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


const getSpecificProductAction =  (id)=> async (dispatch)=>{
    try{
        const response=await useGetData(`/api/v1/products/${id}`);
        dispatch({
            type:GET_SPECIFIC_PRODUCT,
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
const getAllProductsByCategoryAction =  (id,limit)=> async (dispatch)=>{
    try{
        const response=await useGetData(`/api/v1/products?category=${id}&limit=${limit}`);
        dispatch({
            type:GET_ALL_PRODUCT_BY_CATEGORY,
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
const getAllProductsBySubCategoryAction =  (id,limit)=> async (dispatch)=>{
    try{
        const response=await useGetData(`/api/v1/products?subcategory=${id}&limit=${limit}`);
        dispatch({
            type:GET_ALL_PRODUCT_BY_SUBCATEGORY,
            payload:response
        })
    }
    catch(e){
        dispatch({
            type:GET_ALL_PRODUCT_BY_SUBCATEGORY,
            payload:e.response,
        })
    }
    


}

const getAllProductsByBrandAction =  (id,limit)=> async (dispatch)=>{
    try{
        const response=await useGetData(`/api/v1/products?brand=${id}&limit=${limit}`);
        dispatch({
            type:GET_ALL_PRODUCT_BY_BRAND,
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

const getLikeProductAction=(id)=> async (dispatch)=>{
    try{
        const response=await useGetData(`/api/v1/products/?category=${id}`);
        dispatch({
            type:GET_LIKE_PRODUCTS,
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

const getProductsPagesAction =  (id,page)=> async (dispatch)=>{
    try{
        const response=await useGetData(`/api/v1/products?limit=${id}&page=${page}`);
        dispatch({

            type:GET_ALL_PRODUCT,
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

const getProductsPagesForCategoryAction =  (id,limit,page)=> async (dispatch)=>{
    try{
        const response=await useGetData(`/api/v1/products?category=${id}&limit=${limit}&page=${page}`);
        dispatch({
            
            type:GET_ALL_PRODUCT_BY_CATEGORY,
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

const getProductsPagesForBrandAction =  (id,limit,page)=> async (dispatch)=>{
    try{
        const response=await useGetData(`/api/v1/products?brand=${id}&limit=${limit}&page=${page}`);
        dispatch({
            
            type:GET_ALL_PRODUCT_BY_BRAND,
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
const getProductsPagesForSubCategoryAction =  (id,limit,page)=> async (dispatch)=>{
    try{
        const response=await useGetData(`/api/v1/products?subcategory=${id}&limit=${limit}&page=${page}`);
        dispatch({
            
            type:GET_ALL_PRODUCT_BY_SUBCATEGORY,
            payload:response
        })
    }
    catch(e){
        dispatch({
            type:GET_ALL_PRODUCT_BY_SUBCATEGORY,
            payload:e.response,
        })
    }


}

const getHighRatedProductsAction =  ()=> async (dispatch)=>{
    try{
        const response=await useGetData(`/api/v1/products?sort=-ratingsAverage`);
        dispatch({
            type:GET_RATED_PRODUCTS,
            payload:response
        })
    }
    catch(e){
        dispatch({
            type:GET_RATED_PRODUCTS,
            payload:e.response,
        })
    }


}
const getBestSellerProductsAction =  ()=> async (dispatch)=>{
    try{
        const response=await useGetData(`/api/v1/products?sort=-sold`);
        dispatch({
            type:GET_Best_Seller_PRODUCTS,
            payload:response
        })
    }
    catch(e){
        dispatch({
            type:GET_Best_Seller_PRODUCTS,
            payload:e.response,
        })
    }


}
const getAllProductsWithSearchAction =  (qs)=> async (dispatch)=>{
    try{
        const response=await useGetData(`/api/v1/products?${qs}`);
        dispatch({
            type:Get_All_PRODUCT_SEARCH,
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

const deleteProductAction=(id)=> async (dispatch)=>{
    try{
        const response=await useDeleteData(`/api/v1/products/${id}`);
        dispatch({
            type:DELETE_PRODUCT,
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

const updateProductAction =  (id,data)=> async (dispatch)=>{
    try{
        const response=await usePutDataWithDifferentFormat(`/api/v1/products/${id}`,data);
        dispatch({
            type:UPDATE_PRODUCT,
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


export {addProductAction , getAllProductsAction,getSpecificProductAction,getLikeProductAction,getProductsPagesAction,deleteProductAction , updateProductAction,getAllProductsWithSearchAction,getAllProductsByCategoryAction,getProductsPagesForCategoryAction,getAllProductsByBrandAction,getProductsPagesForBrandAction,getAllProductsBySubCategoryAction,getProductsPagesForSubCategoryAction,getBestSellerProductsAction,getHighRatedProductsAction}