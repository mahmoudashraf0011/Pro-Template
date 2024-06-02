import { Add_Brand, DELETE_BRAND, GET_SPECIFIC_BRAND, Get_All_Brand,Get_Error, UPDATE_BRAND, UPDATE_PRODUCT } from "../../type";

const initial ={
    brand:[],
    specificBrand:[],
    deleteBrand:[],
    updateBrand:[],
    loading:false
}

export const allBrandReducer=(state=initial,action)=>{
    switch(action.type){
        case Get_All_Brand:
            return{
                ...state,
                brand:action.payload,
                loading:false
            }
        case Add_Brand:
            return{
                    brand:action.payload,
                    loading:false
                }
        case GET_SPECIFIC_BRAND:
            return{
                    specificBrand:action.payload,
                    loading:false
                }

        case DELETE_BRAND:
            return{
                    ...state,
                    deleteBrand:action.payload,
                    loading:false
                }
        case UPDATE_BRAND:
            return{
                    ...state,
                    updateBrand:action.payload,
                    loading:false
                }
        case Get_Error : 
            return{
                brand:action.payload,
                loading:false
            }

        default:
            return state;
    }
}

