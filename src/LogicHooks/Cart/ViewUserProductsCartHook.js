import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Notify from '../../Components/JS/Utility/Notify';
import { getAllProdctsCartAction } from '../../redux/actions/Cart/CartAction';

export default function ViewUserProductsCartHook() {
    const [loading,setLoading]=useState(true);
    const [items,setItems]=useState([]);
    const [cartID,setCartID]=useState("");
    const [totalPrice,setTotalPrice]=useState("");
    const [discount,setDiscount]=useState("");
    const [coupon,setCoupon]=useState("");
    const [countItems,setCountItems]=useState("");
   

    const products=useSelector(state=> state.cartRducer.getUserCart);

    const dispatch=useDispatch();

    useEffect(async ()=>{
        setLoading(true)
        await dispatch(getAllProdctsCartAction());
        setLoading(false)

      },[])

      useEffect(()=>{
        if(loading ===false){
            if(products){
                setItems(products.data.products)
                setTotalPrice(products.data.totalCartPrice)
                if(products.data.totalAfterDiscount){
                  setDiscount(products.data.totalAfterDiscount)
                }
                setCountItems(products.numOfCartItems)
                if(products.data.coupon){
                  setCoupon(products.data.coupon);
                }
                setCartID(products.data._id);

            }
      
           setLoading(true)
        }
      },[loading])

    
return [items,totalPrice,discount,coupon,countItems,cartID]
}
