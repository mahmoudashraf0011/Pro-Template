import useDeleteData from "../../../hooks/useDeleteData";
import { useGetDataWithToken } from "../../../hooks/useGetData";
import { usePostData } from "../../../hooks/usePostData";
import { usePutDate } from "../../../hooks/useUpdateData";
import { ADD_TO_CART, APPLY_COUPON_TO_CART, CLEAR_USER_CART, DELETE_SPECIFIC_CART_ITEM, GET_USER_CART, UPDATE_CART_PRODUCT_QUANTITY } from "../../type";


const getAllProdctsCartAction =  ()=> async (dispatch)=>{
    try{
        const response=await useGetDataWithToken(`/api/v1/cart`);
        dispatch({
            type:GET_USER_CART,
            payload:response,
            loading:true

        })
    }
    catch(e){
        dispatch({
            type:GET_USER_CART,
            payload:e.response,
        })
    }
}

const addToCartAction =  (data)=> async (dispatch)=>{
    try{
        const response=await usePostData(`/api/v1/cart`,data);
        dispatch({
            type:ADD_TO_CART,
            payload:response,
            loading:true

        })
    }
    catch(e){
        dispatch({
            type:ADD_TO_CART,
            payload:e.response,
        })
    }
}

const deleteSpecificCartItemAction =  (id)=> async (dispatch)=>{
    try{
        const response=await useDeleteData(`/api/v1/cart/${id}`);
        dispatch({
            type:DELETE_SPECIFIC_CART_ITEM,
            payload:response,
            loading:true

        })
    }
    catch(e){
        dispatch({
            type:DELETE_SPECIFIC_CART_ITEM,
            payload:e.response,
        })
    }
}
const clearUserCartAction =  ()=> async (dispatch)=>{
    try{
        const response=await useDeleteData(`/api/v1/cart`);
        dispatch({
            type:CLEAR_USER_CART,
            payload:response,
            loading:true

        })
    }
    catch(e){
        dispatch({
            type:CLEAR_USER_CART,
            payload:e.response,
        })
    }
}

const updateQuntaityForProductCartAction=  (id,data)=> async (dispatch)=>{
    try{
        const response=await usePutDate(`/api/v1/cart/${id}`,data);
        dispatch({
            type:UPDATE_CART_PRODUCT_QUANTITY,
            payload:response,
            loading:true

        })
    }
    catch(e){
        dispatch({
            type:UPDATE_CART_PRODUCT_QUANTITY,
            payload:e.response,
        })
    }
}

const applyCouponToCartAction=  (data)=> async (dispatch)=>{
    try{
        const response=await usePutDate(`/api/v1/cart/applyCoupon`,data);
        dispatch({
            type:APPLY_COUPON_TO_CART,
            payload:response,
            loading:true

        })
    }
    catch(e){
        dispatch({
            type:APPLY_COUPON_TO_CART,
            payload:e.response,
        })
    }
}
export {getAllProdctsCartAction,addToCartAction,deleteSpecificCartItemAction,clearUserCartAction,updateQuntaityForProductCartAction,applyCouponToCartAction}
