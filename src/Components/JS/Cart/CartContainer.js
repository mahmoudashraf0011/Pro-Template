import React from 'react'
import CartItem from './CartItem'
import '../../Styles/Cart/CartContainer.css'
import PageTitle from '../Utility/PageTitle'
import CartCheckout from './CartCheckout'
import ViewUserProductsCartHook from '../../../LogicHooks/Cart/ViewUserProductsCartHook'
import { ToastContainer } from 'react-toastify'
export default function CartContainer() {
  const [items,totalPrice,discount,coupon,countItems]=ViewUserProductsCartHook();

  return (
    <div className='cartPage'>
      <div className='container'>
        <PageTitle title="Shopping Cart"/> 
        <div className='cartItems'>
          <div className='cartItemsLeft'>
            {items?(
              items.map((item)=>{
              return <CartItem item={item}/>
              })
            ): <h2 className='noResult' style={{width:"100%"}}>There are no Products </h2> }

          </div>
          <CartCheckout totalPrice={totalPrice} discount={discount}/>
          <ToastContainer />
        </div>
      </div>
    </div>
  )
}
