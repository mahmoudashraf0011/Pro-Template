import React from 'react'
import '../../Styles/Cart/CartContainer.css'
import { Link } from 'react-router-dom'

export default function CartCheckout() {
  return (
    <div className='checkout'>
        <form className='cartCoupon'>
            <input type='text' placeholder='Coupon Code' />
            <button>Apply</button>
        </form>
        <p className='checkout_price'>3400</p>
        <Link to="/order/paymentmethod" className='checkout_purchase'>purchase completion</Link>
    </div>
  )
}
