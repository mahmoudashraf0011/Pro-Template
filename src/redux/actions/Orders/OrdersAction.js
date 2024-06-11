import useDeleteData from "../../../hooks/useDeleteData";
import { useGetDataWithToken } from "../../../hooks/useGetData";
import { usePostData } from "../../../hooks/usePostData";
import { usePutDate } from "../../../hooks/useUpdateData";
import { CREATE_CARD_ORDER, CREATE_CASH_ORDER, GET_ALL_ORDERS, GET_SPECIFIC_ORDER, UPDATE_ORDER_DELIVER, UPDATE_ORDER_PAID } from "../../type"



const getAllOrdersAction =  (limit,page)=> async (dispatch)=>{
    try{
        const response=await useGetDataWithToken(`/api/v1/orders?limit=${limit}&page=${page}`);
        dispatch({
            type:GET_ALL_ORDERS,
            payload:response,
            loading:true

        })
    }
    catch(e){
        dispatch({
            type:GET_ALL_ORDERS,
            payload:e.response,
        })
    }
}


const getSpecificOrderAction =  (id)=> async (dispatch)=>{
    try{
        const response=await useGetDataWithToken(`/api/v1/orders/${id}`);
        dispatch({
            type:GET_SPECIFIC_ORDER,
            payload:response,
            loading:true

        })
    }
    catch(e){
        dispatch({
            type:GET_SPECIFIC_ORDER,
            payload:e.response,
        })
    }
}

const getAllOrdersByFilterAction =  (qs)=> async (dispatch)=>{
    try{
        const response=await useGetDataWithToken(`/api/v1/orders?${qs}`);
        dispatch({
            type:GET_ALL_ORDERS,
            payload:response,
            loading:true

        })
    }
    catch(e){
        dispatch({
            type:GET_ALL_ORDERS,
            payload:e.response,
        })
    }
}


const createOrderCashAction =  (id,data)=> async (dispatch)=>{
    try{
        const response=await usePostData(`/api/v1/orders/${id}`,data);
        dispatch({
            type:CREATE_CASH_ORDER,
            payload:response,
            loading:true

        })
    }
    catch(e){
        dispatch({
            type:CREATE_CASH_ORDER,
            payload:e.response,
        })
    }
}

const createOrderCardAction =  (id,data)=> async (dispatch)=>{
    try{
        const response=await useGetDataWithToken(`/api/v1/orders/checkout-session/${id}`,data);
        dispatch({
            type:CREATE_CARD_ORDER,
            payload:response,
            loading:true

        })
    }
    catch(e){
        dispatch({
            type:CREATE_CARD_ORDER,
            payload:e.response,
        })
    }
}

const updateOrderPaidAction=  (id)=> async (dispatch)=>{
    try{
        const response=await usePutDate(`/api/v1/orders/${id}/pay`);
        dispatch({
            type:UPDATE_ORDER_PAID,
            payload:response,
            loading:true

        })
    }
    catch(e){
        dispatch({
            type:UPDATE_ORDER_PAID,
            payload:e.response,
        })
    }
}

const updateOrderDeliverAction=  (id)=> async (dispatch)=>{
    try{
        const response=await usePutDate(`/api/v1/orders/${id}/deliver`);
        dispatch({
            type:UPDATE_ORDER_DELIVER,
            payload:response,
            loading:true

        })
    }
    catch(e){
        dispatch({
            type:UPDATE_ORDER_DELIVER,
            payload:e.response,
        })
    }
}

export {getAllOrdersAction,getSpecificOrderAction,createOrderCashAction,createOrderCardAction,updateOrderPaidAction,updateOrderDeliverAction,getAllOrdersByFilterAction}
