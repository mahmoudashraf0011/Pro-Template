import { ADD_TO_CART, APPLY_COUPON_TO_CART, CLEAR_USER_CART, DELETE_SPECIFIC_CART_ITEM, GET_USER_CART, UPDATE_CART_PRODUCT_QUANTITY } from "../../type"

const initial ={
    addToCart:[],
    updateQuentity:[],
    getUserCart:[],
    removeSpecificCartItem:[],
    clearUserCart:[],
    applyCouponToCart:[],
    loading:false
}

export const CartReducer=(state=initial,action)=>{
    switch(action.type){
        case GET_USER_CART:
            return{
                    ...state,
                    getUserCart:action.payload,
                    loading:false
                }
        case DELETE_SPECIFIC_CART_ITEM:
            return{
                    ...state,
                    removeSpecificCartItem:action.payload,
                    loading:false
                }
        case CLEAR_USER_CART:
            return{
                    ...state,
                    clearUserCart:action.payload,
                    loading:false
                }
        case ADD_TO_CART:
            return{
                    ...state,
                    addToCart:action.payload,
                    loading:false
                }
        case UPDATE_CART_PRODUCT_QUANTITY:
            return{
                    ...state,
                    updateQuentity:action.payload,
                    loading:false
                }
        case APPLY_COUPON_TO_CART:
            return{
                    ...state,
                    applyCouponToCart:action.payload,
                    loading:false
                }

        default:
            return state;
    }
}

