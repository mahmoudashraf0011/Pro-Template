import useDeleteData from "../../../hooks/useDeleteData";
import { useGetDataWithToken } from "../../../hooks/useGetData";
import { usePostData } from "../../../hooks/usePostData";
import { usePutDate } from "../../../hooks/useUpdateData";
import { CREATE_REVIEW, DELETE_REVIEW_FOR_PRODUCT, GET_ALL_REVIEWS, GET_SPECIFIC_REVIEW, REVIEWS_FOR_PORDUCT, SPECIFIC_REVIEW_FOR_PORDUCT, UPDATE_REVIEW_FOR_PRODUCT } from "../../type";
import React from "react";
// Review for products by user
const createReviewAction =  (id,data)=> async (dispatch)=>{
    try{
        const response=await usePostData(`/api/v1/products/${id}/reviews`,data);
        dispatch({
            type:CREATE_REVIEW,
            payload:response,
            loading:true

        })
    }
    catch(e){
        dispatch({
            type:CREATE_REVIEW,
            payload:e.response,
        })
    }
}

const reviewProductAction =  (id,limit,page)=> async (dispatch)=>{
    try{
        const response=await useGetDataWithToken(`/api/v1/products/${id}/reviews?limit=${limit}&page=${page}`);
        dispatch({
            type:REVIEWS_FOR_PORDUCT,
            payload:response,
            loading:true

        })
    }
    catch(e){
        dispatch({
            type:REVIEWS_FOR_PORDUCT,
            payload:e.response,
        })
    }
}
const specificReviewProductAction =  (prodID,revID,limit,page)=> async (dispatch)=>{
    try{
        const response=await useGetDataWithToken(`/api/v1/products/${prodID}/reviews/${revID}?limit=${limit}&page=${page}`);
        dispatch({
            type:SPECIFIC_REVIEW_FOR_PORDUCT,
            payload:response,
            loading:true

        })
    }
    catch(e){
        dispatch({
            type:SPECIFIC_REVIEW_FOR_PORDUCT,
            payload:e.response,
        })
    }
}
const deleteReviewForProdcutAction=  (id)=> async (dispatch)=>{
    try{
        const response=await useDeleteData(`/api/v1/reviews/${id}`);
        dispatch({
            type:DELETE_REVIEW_FOR_PRODUCT,
            payload:response,
            loading:true

        })
    }
    catch(e){
        dispatch({
            type:DELETE_REVIEW_FOR_PRODUCT,
            payload:e.response,
        })
    }
}

const updateReviewForProdcutAction=  (id,data)=> async (dispatch)=>{
    try{
        const response=await usePutDate(`/api/v1/reviews/${id}`,data);
        dispatch({
            type:UPDATE_REVIEW_FOR_PRODUCT,
            payload:response,
            loading:true

        })
    }
    catch(e){
        dispatch({
            type:UPDATE_REVIEW_FOR_PRODUCT,
            payload:e.response,
        })
    }
}

//Reveiws Action by admin
const getAllReviewsAction =  (limit,page)=> async (dispatch)=>{
    try{
        const response=await useGetDataWithToken(`/api/v1/reviews?limit=${limit}`);
        dispatch({
            type:GET_ALL_REVIEWS,
            payload:response,
            loading:true

        })
    }
    catch(e){
        dispatch({
            type:GET_ALL_REVIEWS,
            payload:e.response,
        })
    }
}
const getPageReviewsAction =  (limit,page)=> async (dispatch)=>{
    try{
        const response=await useGetDataWithToken(`/api/v1/reviews?limit=${limit}&page=${page}`);
        dispatch({
            type:GET_ALL_REVIEWS,
            payload:response,
            loading:true

        })
    }
    catch(e){
        dispatch({
            type:GET_ALL_REVIEWS,
            payload:e.response,
        })
    }
}
const getSpecificReviewAction =  (id)=> async (dispatch)=>{
    try{
        const response=await useGetDataWithToken(`/api/v1/reviews/${id}`);
        dispatch({
            type:GET_SPECIFIC_REVIEW,
            payload:response,
            loading:true

        })
    }
    catch(e){
        dispatch({
            type:GET_SPECIFIC_REVIEW,
            payload:e.response,
        })
    }
}

export {createReviewAction,reviewProductAction,specificReviewProductAction,deleteReviewForProdcutAction,updateReviewForProdcutAction,getAllReviewsAction,getSpecificReviewAction,getPageReviewsAction}