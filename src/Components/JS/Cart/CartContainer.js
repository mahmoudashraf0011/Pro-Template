import React from 'react'
import CartItem from './CartItem'
import '../../Styles/Cart/CartContainer.css'
import PageTitle from '../Utility/PageTitle'
import CartCheckout from './CartCheckout'
export default function CartContainer() {
  return (
    <div className='cartPage'>
      <div className='container'>
        <PageTitle title="Shopping Cart"/> 
        <div className='cartItems'>
          <div className='cartItemsLeft'>
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
          </div>
          <CartCheckout />
        </div>
      </div>
    </div>
  )
}
