import React, { useState } from 'react'
import SectionTitle from '../Utility/SectionTitle'
import { Container } from 'react-bootstrap'
import '../../Styles/Checkout/Checkout.css'
import ViewUserProductsCartHook from '../../../LogicHooks/Cart/ViewUserProductsCartHook';
import CreateCashOrderHook from '../../../LogicHooks/Orders/CreateCashOrderHook';
import Notify from '../Utility/Notify';
import { ToastContainer } from 'react-toastify';
import CreateCardOrderHook from '../../../LogicHooks/Orders/CreateCardOrderHook';


export default function Checkout() {
  const [items,totalPrice,discount,coupon,countItems,cartID]=ViewUserProductsCartHook();

 
  const [check,setCheck]=useState("");


  //check Type of payment Method
  const getChooseMethodPay=(e)=>{
    setCheck(e.target.value)
  }

  const onChangeChoosePaymentMethod=(e)=>{
    e.preventDefault();
    if(check == "card"){
      onChooseCard();
      console.log("s");
    }else if(check== "cash"){
        onChooseCash();

    }else{
      Notify("Please choose Payment Method!","warn")
      return;

    }
  }
  const[addresses,address,onChangeAddress,onChooseCash]=CreateCashOrderHook(cartID,check);
  const[onChooseCard]=CreateCardOrderHook(cartID,address,check);
  return (
    <div className='payment'>
      <SectionTitle title="Choose Payment Methods" />
      <Container>
        <form className='choosePayment'>
          <div className='choosePaymentWays'>
              <div className='choosePaymentWay'>
                  <input type="radio" id="card" value="card" name='pay' onChange={getChooseMethodPay}/>
                  <label for="card">Payment Via Card (Not Recommended)</label>
              </div>
              <div className='choosePaymentWay'>
                  <input type="radio" id="cash" value="cash" name='pay' onChange={getChooseMethodPay}/>
                  <label for="cash">Payment when receiving (Cash)</label>
              </div>
              <select name="addresses" id="addresses" className="addresses" onChange={onChangeAddress} >
                <option value="0">Select Address</option>
                {
                  addresses?addresses.map((item,index)=>{
                    return <option value={item._id} key={index}>{item.alias}</option>
                  }): "" 
                }         
              </select>
          </div>
          <div className='payment_down'>
            <div className='payment_price down'>
            {
            discount?(
              `${totalPrice } EGP - After Discount ${discount} EGP`
            ):`${totalPrice} EGP`

            }
            </div>
            <button className='payment_purchase  down' onClick={onChangeChoosePaymentMethod}>purchase completion</button>
          </div>
        </form>
        <ToastContainer />
      </Container>

    </div>
  )
}
