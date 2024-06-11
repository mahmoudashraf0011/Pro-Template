import { DELETE_CURRENT_USER, GET_LOGGED_USER, UPDATE_USER_DATA, UPDATE_USER_PASS } from "../../type"

const initial ={
    currentUser:[],
    updateUserData:[],
    updateUserPass:[],
    deleteCurrentUser:[],
    loading:false
}

export const UserProfileReducer=(state=initial,action)=>{
    switch(action.type){
        case GET_LOGGED_USER:
            return{
                    ...state,
                    currentUser:action.payload,
                    loading:false
                }
        case DELETE_CURRENT_USER:
            return{
                    ...state,
                    deleteCurrentUser:action.payload,
                    loading:false
                }
        case UPDATE_USER_DATA:
            return{
                    ...state,
                    updateUserData:action.payload,
                    loading:false
                }
        case UPDATE_USER_PASS:
            return{
                    ...state,
                    updateUserPass:action.payload,
                    loading:false
                }

        default:
            return state;
    }
}

