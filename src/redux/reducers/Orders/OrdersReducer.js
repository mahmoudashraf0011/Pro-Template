import { CREATE_CARD_ORDER, CREATE_CASH_ORDER, GET_ALL_ORDERS, GET_SPECIFIC_ORDER, UPDATE_ORDER_DELIVER, UPDATE_ORDER_PAID } from "../../type"



const initial ={
    createCashOrder:[],
    createCardOrder:[],
    getAllOrders:[],
    getSpecificOrder:[],
    updatePaidOrder:[],
    updateDeliverOrder:[],
    loading:false
}

export const OrdersReducer=(state=initial,action)=>{
    switch(action.type){
        case GET_ALL_ORDERS:
            return{
                    ...state,
                    getAllOrders:action.payload,
                    loading:false
                }
        case GET_SPECIFIC_ORDER:
            return{
                    ...state,
                    getSpecificOrder:action.payload,
                    loading:false
                }
        case CREATE_CASH_ORDER:
            return{
                    ...state,
                    createCashOrder:action.payload,
                    loading:false
                }
        case CREATE_CARD_ORDER:
            return{
                    ...state,
                    createCardOrder:action.payload,
                    loading:false
                }
        case UPDATE_ORDER_PAID:
            return{
                    ...state,
                    updatePaidOrder:action.payload,
                    loading:false
                }
        case UPDATE_ORDER_DELIVER:
            return{
                    ...state,
                    updateDeliverOrder:action.payload,
                    loading:false
                }

        default:
            return state;
    }
}

