import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllOrdersAction, getOrderPagedAction } from "../../redux/actions/Orders/OrdersAction";

 export default function ViewAllOrdersHook() {
    const dispatch=useDispatch();
    const [load,setLoad]=useState(true);
    const [orders,setOrders]=useState([]);
    const [paginate,setPaginate]=useState('');
    const [results,setResults]=useState("");

    useEffect(()=>{
        const run=async()=>{
            setLoad(true)
            await dispatch(getAllOrdersAction(2,1));
            setLoad(false)

        }
        run();
    
    },[])
    
    // get all orders
    const ordersRes=useSelector(state=> state.ordersReducer.getAllOrders);
   

  const onPress= async(page)=>{
    setLoad(true)
    await dispatch(getAllOrdersAction(2,page))
    setLoad(false)
  }

  useEffect(()=>{
    if(load==false){
        if(ordersRes){ 
            if(ordersRes.data){
                setOrders(ordersRes.data);
            }     
        if(ordersRes.results){
            setResults(ordersRes.results)

        }
        if(ordersRes.paginationResult){
            setPaginate(ordersRes.paginationResult.numberOfPages)
        }
        }
    }
},[load])
  

    return [orders,results,paginate,onPress]
 }


