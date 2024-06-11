import { ADD_FAV, ALL_FAV, DELETE_FAV } from "../../type";

const initial ={
    addFav:[],
    deleteFav:[],
    allFav:[],

    loading:false
}

export const FavouriteReducer=(state=initial,action)=>{
    switch(action.type){
        case ADD_FAV:
            return{
                    ...state,
                    addFav:action.payload,
                    loading:false
                }

            case DELETE_FAV:
                return{
                    ...state,
                    deleteFav:action.payload,
                    loading:false
                }
            case ALL_FAV:
                return{
                    ...state,
                    allFav:action.payload,
                    loading:false
                }
        default:
            return state;
    }
}

