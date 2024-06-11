import { CREATE_COUPON, DELETE_COUPON, GET_ALL_COUPONS, GET_SPECIFIC_COUPON, UPDATE_COUPON } from "../../type";

const initial ={
    allCoupons:[],
    specificCoupon:[],
    createCoupon:[],
    deleteCoupon:[],
    updateCoupon:[],
    loading:false
}

export const CouponReducer=(state=initial,action)=>{
    switch(action.type){
        case GET_ALL_COUPONS:
            return{
                    ...state,
                    allCoupons:action.payload,
                    loading:false
                }
        case GET_SPECIFIC_COUPON:
            return{
                    ...state,
                    specificCoupon:action.payload,
                    loading:false
                }
        case CREATE_COUPON:
            return{
                    ...state,
                    createCoupon:action.payload,
                    loading:false
                }
        case DELETE_COUPON:
            return{
                    ...state,
                    deleteCoupon:action.payload,
                    loading:false
                }
        case UPDATE_COUPON:
            return{
                    ...state,
                    updateCoupon:action.payload,
                    loading:false
                }

        default:
            return state;
    }
}

