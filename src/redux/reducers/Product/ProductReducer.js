import { ADD_PRODUCT,DELETE_PRODUCT,GET_ALL_PRODUCT,GET_ALL_PRODUCT_BY_BRAND,GET_ALL_PRODUCT_BY_CATEGORY,GET_LIKE_PRODUCTS,GET_SPECIFIC_PRODUCT,Get_All_Catagory_SEARCH,Get_All_PRODUCT_SEARCH,Get_Error, UPDATE_PRODUCT } from "../../type";

const initial ={
    product:[],
    allProduct:[],
    allProductSearch:[],
    allproductByCategory:[],
    allproductByBrand:[],
    specificProduct:[],
    likeProduct:[],
    deleteProduct:[],
    updateProduct:[],

    loading:false
}

export const ProductReducer=(state=initial,action)=>{
    switch(action.type){
        case ADD_PRODUCT:
            return{
                    ...state,
                    product:action.payload,
                    loading:false
                }
        case GET_ALL_PRODUCT:
                return{
                    ...state,
                    allProduct:action.payload,
                    loading:false
                }
        case Get_All_PRODUCT_SEARCH:
            return{
                ...state,
                allProductSearch:action.payload,
                loading:false
            }
        case GET_ALL_PRODUCT_BY_CATEGORY:
            return{
                ...state,
                allproductByCategory:action.payload,
                loading:false
            }
        case GET_ALL_PRODUCT_BY_BRAND:
                return{
                    ...state,
                    allproductByBrand:action.payload,
                    loading:false
                }
        case GET_SPECIFIC_PRODUCT:
                return{
                    ...state,
                    specificProduct:action.payload,
                    loading:false
                }
        case GET_LIKE_PRODUCTS:
                return{
                    ...state,
                    likeProduct:action.payload,
                    loading:false
                }


        case DELETE_PRODUCT:
            return{
                    ...state,
                    deleteProduct:action.payload,
                    loading:false
                }
        case UPDATE_PRODUCT:
            return{
                    ...state,
                    updateProduct:action.payload,
                    loading:false
                }
        case Get_Error : 
            return{
                product:action.payload,
                loading:false
            }

        default:
            return state;
    }
}

