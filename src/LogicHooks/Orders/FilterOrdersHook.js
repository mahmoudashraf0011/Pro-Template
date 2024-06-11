import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllAddresssesAction, getSpecificAddressAction } from '../../redux/actions/UserAddress/UserAddressAction';
import { createOrderCashAction, getAllOrdersByFilterAction } from '../../redux/actions/Orders/OrdersAction';
import Notify from '../../Components/JS/Utility/Notify';
import ViewAllOrdersHook from '../User/ViewAllOrdersHook';

export default function FilterOrdersHook(orders,paginate,onPress) {
    const [load,setLoad]=useState(true);
    const [choosePayMethod,setChoosePayMethod]=useState("");
    const [choosePay,setChoosePay]=useState("");
    const [chooseDeliver,setChooseDeliver]=useState("");
    const [ispay,setIsPay]=useState("");
    const [isWay,setIsWay]=useState("");
    const [isDeliver,setIsDeliver]=useState("");
    const [filterOrders,setFilterOrders]=useState(orders?orders:[]);
    const [filterPaginate,setFilterPaginate]=useState(paginate?paginate:"");

    useEffect(()=>{
        if(orders){
            setFilterOrders(orders)
        }
        if(paginate){
            setFilterPaginate(paginate)
        }
       
      },[orders,paginate])


    const ordersResFilter=useSelector(state=> state.ordersReducer.getAllOrders);

    const dispatch=useDispatch();

    // all Changes input
    const onChoosePayMethod=async(e)=>{
        setChoosePayMethod(e.target.value)

    }
    const onChoosePay=async(e)=>{
        setChoosePay(e.target.value)
     
    }
    const onChooseDeliver=async(e)=>{
        setChooseDeliver(e.target.value)
        
    }
    let way,pay,deliver;
    const validationFilterOrders=()=>{
       
        // check Choose Pay method
        if(choosePayMethod==""||choosePayMethod=="0"){
            way=''
        }else{
            if(pay==''||pay=="0" && deliver==''||deliver=="0" ){
                way=`paymentMethodType=${choosePayMethod}&`
            }else{
            way=`&paymentMethodType=${choosePayMethod}&`
            }
           
        }

        // check choose pay status
        if(choosePay=="false"||choosePay=="true"){
            if(way==''||way=="0" && deliver==''||deliver=="0" ){
                pay=`isPaid=${choosePay}&`         
            }else{
                pay=`isPaid=${choosePay}`         
            }
        }else{
            pay=""
         
        }

        //check deliver status
        if(chooseDeliver==""||chooseDeliver=="0"){

           deliver=''
        }else{
            if(pay==''||pay=="0" && way==''||way=="0" ){
                deliver=`isDelivered=${chooseDeliver}&`
            }else{
                if(way==''||way=="0" ){
                    deliver=`&isDelivered=${chooseDeliver}&`
                }else{
                    deliver=`isDelivered=${chooseDeliver}&`
                }

            }
           

        }
   
      
    }
   
    const onSubmitFilter=async(e)=>{
        e.preventDefault();
   
        validationFilterOrders();
        setLoad(true)
         await dispatch(getAllOrdersByFilterAction(`${pay}${way}${deliver}limit=2&page=1`))
        setLoad(false)

    }
    const onPressFilter= async(page)=>{
        validationFilterOrders();
        setLoad(true)
        await dispatch(getAllOrdersByFilterAction(`${pay}${way}${deliver}limit=2&page=${page}`))
        setLoad(false)
      }
    
      useEffect(()=>{
        if(load==false){
            if(ordersResFilter){
                setFilterOrders(ordersResFilter.data)
       
            }
            if(ordersResFilter.paginationResult){
                setFilterPaginate(ordersResFilter.paginationResult.numberOfPages)
            }
            
            setLoad(true)
        }
      },[load])


    
    const onSubmitAll=(e)=>{
        e.preventDefault();
        if(orders){
            setFilterOrders(orders)
        }
        if(paginate){
            setFilterPaginate(paginate)
        }
    }



return [choosePayMethod,choosePay,chooseDeliver,filterOrders,filterPaginate,onPressFilter,onChoosePayMethod,onChoosePay,onChooseDeliver,onSubmitFilter,onSubmitAll]
}


