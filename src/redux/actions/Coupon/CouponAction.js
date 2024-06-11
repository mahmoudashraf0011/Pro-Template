import useDeleteData from "../../../hooks/useDeleteData";
import { useGetDataWithToken } from "../../../hooks/useGetData";
import { usePostData } from "../../../hooks/usePostData";
import { usePutDate } from "../../../hooks/useUpdateData";
import { CREATE_COUPON, DELETE_COUPON, GET_ALL_COUPONS, GET_SPECIFIC_COUPON, UPDATE_COUPON } from "../../type";


const getAllCouponsAction =  (limit,page)=> async (dispatch)=>{
    try{
        const response=await useGetDataWithToken(`/api/v1/coupons?limit=${limit}&page=${page}`);
        dispatch({
            type:GET_ALL_COUPONS,
            payload:response,
            loading:true

        })
    }
    catch(e){
        dispatch({
            type:GET_ALL_COUPONS,
            payload:e.response,
        })
    }
}

const getSpecificCouponAction =  (id)=> async (dispatch)=>{
    try{
        const response=await useGetDataWithToken(`/api/v1/coupons/${id}`);
        dispatch({
            type:GET_SPECIFIC_COUPON,
            payload:response,
            loading:true

        })
    }
    catch(e){
        dispatch({
            type:GET_SPECIFIC_COUPON,
            payload:e.response,
        })
    }
}

const createCouponAction =  (data)=> async (dispatch)=>{
    try{
        const response=await usePostData(`/api/v1/coupons`,data);
        dispatch({
            type:CREATE_COUPON,
            payload:response,
            loading:true

        })
    }
    catch(e){
        dispatch({
            type:CREATE_COUPON,
            payload:e.response,
        })
    }
}

const deleteCouponAction =  (id)=> async (dispatch)=>{
    try{
        const response=await useDeleteData(`/api/v1/coupons/${id}`);
        dispatch({
            type:DELETE_COUPON,
            payload:response,
            loading:true

        })
    }
    catch(e){
        dispatch({
            type:DELETE_COUPON,
            payload:e.response,
        })
    }
}

const updateCouponAction=  (id,data)=> async (dispatch)=>{
    try{
        const response=await usePutDate(`/api/v1/coupons/${id}`,data);
        dispatch({
            type:UPDATE_COUPON,
            payload:response,
            loading:true

        })
    }
    catch(e){
        dispatch({
            type:UPDATE_COUPON,
            payload:e.response,
        })
    }
}

export {getAllCouponsAction,getSpecificCouponAction,createCouponAction,deleteCouponAction,updateCouponAction}
