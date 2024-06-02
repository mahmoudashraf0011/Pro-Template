import { Add_Category, DELETE_CATEGORY, GET_SPECIFIC_CATEGORY, Get_All_Catagory,Get_Error, UPDATE_CATEGORY } from "../../type";

const initial ={
    category:[],
    specificCategory:[],
    deleteCategory:[],
    updateCategory:[],
    loading:false
}

export const allCategoryReducer=(state=initial,action)=>{
    switch(action.type){
        case Get_All_Catagory:
            return{
                ...state,
                category:action.payload,
                loading:false
            }
        case Add_Category:
            return{
                    category:action.payload,
                    loading:false
                }
        case GET_SPECIFIC_CATEGORY:
            return{
             
                    specificCategory:action.payload,
                    loading:false
                }

        case DELETE_CATEGORY:
            return{
                    ...state,
                    deleteCategory:action.payload,
                    loading:false
                }
        case UPDATE_CATEGORY:
            return{
                    ...state,
                    updateCategory:action.payload,
                    loading:false
                }

        case Get_Error : 
            return{
                category:action.payload,
                loading:false
            }
        default:
            return state;
    }
}

