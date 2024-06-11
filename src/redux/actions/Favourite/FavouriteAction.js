import useDeleteData from "../../../hooks/useDeleteData";
import { useGetDataWithToken } from "../../../hooks/useGetData";
import { usePostData } from "../../../hooks/usePostData";
import { ADD_FAV, ALL_FAV, DELETE_FAV } from "../../type";

const createFavAction =  (data)=> async (dispatch)=>{
    try{
        const response=await usePostData(`/api/v1/wishlist`,data);
        dispatch({
            type:ADD_FAV,
            payload:response,
            loading:true

        })
    }
    catch(e){
        dispatch({
            type:ADD_FAV,
            payload:e.response,
        })
    }
}
const deleteFavAction =  (id)=> async (dispatch)=>{
    try{
        const response=await useDeleteData(`/api/v1/wishlist/${id}`);
        dispatch({
            type:DELETE_FAV,
            payload:response,
            loading:true

        })
    }
    catch(e){
        dispatch({
            type:DELETE_FAV,
            payload:e.response,
        })
    }
}
const getAllFavAction =  ()=> async (dispatch)=>{
    try{
        const response=await useGetDataWithToken(`/api/v1/wishlist`);
        dispatch({
            type:ALL_FAV,
            payload:response,
            loading:true

        })
    }
    catch(e){
        dispatch({
            type:ALL_FAV,
            payload:e.response,
        })
    }
}
export {createFavAction,deleteFavAction,getAllFavAction}