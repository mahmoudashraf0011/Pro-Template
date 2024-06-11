import { CREATE_ADDRESS, DELETE_ADDRESS, GET_ALL_ADDRESSES, GET_SPECIFIC_ADDRESS, UPDATE_ADDRESS } from "../../type"

const initial ={
    allAddresses:[],
    specificAddress:[],
    createAddress:[],
    deleteAddress:[],
    updateAddress:[],
    loading:false
}

export const UserAddressReducer=(state=initial,action)=>{
    switch(action.type){
        case GET_ALL_ADDRESSES:
            return{
                    ...state,
                    allAddresses:action.payload,
                    loading:false
                }
        case GET_SPECIFIC_ADDRESS:
            return{
                    ...state,
                    specificAddress:action.payload,
                    loading:false
                }
        case CREATE_ADDRESS:
            return{
                    ...state,
                    createAddress:action.payload,
                    loading:false
                }
        case DELETE_ADDRESS:
            return{
                    ...state,
                    deleteAddress:action.payload,
                    loading:false
                }
        case UPDATE_ADDRESS:
            return{
                    ...state,
                    updateAddress:action.payload,
                    loading:false
                }

        default:
            return state;
    }
}

