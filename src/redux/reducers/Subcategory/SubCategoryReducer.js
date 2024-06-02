import {GET_ALL_SUBCATEGORY , GET_ALL_SUBCATEGORY_For_CATEGORY,GET_SPECIFIC_SUBCATEGORY,DELETE_SUBCATEGORY,UPDATE_SUBCATEGORY,Add_Subcategory,Get_Error} from "../../type"

const initial ={
    subcategory:[],
    deleteSubcategory:[],
    updateSubcategory:[],
    specificSubcategory:[],
    loading:false
}

export const SubCategoryReducer=(state=initial,action)=>{
    switch(action.type){
        case GET_ALL_SUBCATEGORY:
            return{
                ...state,
                subcategory:action.payload,
                loading:false
            }
        case GET_ALL_SUBCATEGORY_For_CATEGORY:
            return{
        
                subcategory:action.payload,
                loading:false
            }
            
        case GET_SPECIFIC_SUBCATEGORY:
                return{
                    ...state,
                    specificSubcategory:action.payload,
                    loading:false
                }    
        case DELETE_SUBCATEGORY:
            return{
                    ...state,
                    deleteSubcategory:action.payload,
                    loading:false
                }
        case UPDATE_SUBCATEGORY:
            return{
                    ...state,
                    updateSubcategory:action.payload,
                    loading:false
                }

        case Add_Subcategory:
            return{
                    ...state,
                    subcategory:action.payload,
                    loading:false
                }
        case Get_Error : 
            return{
                subcategory:action.payload,
                loading:false
            }


        default:
            return state;
    }
}

