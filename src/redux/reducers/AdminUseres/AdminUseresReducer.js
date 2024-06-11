import { ADMIN_CREATE_USER, ADMIN_DELETE_USER, ADMIN_GET_ALL_USERS, ADMIN_GET_SPECIFIC_USER, ADMIN_UPDATE_USER, ADMIN_UPDATE_USER_PASS } from "../../type"

const initial ={
    adminCreateUser:[],
    adminGetAllUsers:[],
    adminGetSpecificUser:[],
    adminUpdateUser:[],
    adminUpdateUserPass:[],
    adminDeleteUser:[],
    loading:false
}

export const AdminUseresReducer=(state=initial,action)=>{
    switch(action.type){
        case ADMIN_GET_ALL_USERS:
            return{
                    ...state,
                    adminGetAllUsers:action.payload,
                    loading:false
                }
        case ADMIN_GET_SPECIFIC_USER:
            return{
                    ...state,
                    adminGetSpecificUser:action.payload,
                    loading:false
                }
        case ADMIN_CREATE_USER:
            return{
                    ...state,
                    adminCreateUser:action.payload,
                    loading:false
                }
        case ADMIN_DELETE_USER:
            return{
                    ...state,
                    adminDeleteUser:action.payload,
                    loading:false
                }
        case ADMIN_UPDATE_USER:
            return{
                    ...state,
                    adminUpdateUser:action.payload,
                    loading:false
                }
        case ADMIN_UPDATE_USER_PASS:
            return{
                    ...state,
                    adminUpdateUserPass:action.payload,
                    loading:false
                }

        default:
            return state;
    }
}

