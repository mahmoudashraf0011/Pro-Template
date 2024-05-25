import React from 'react'
import m from '../../../images/other/mobile.png'
import '../../Styles/Cart/CartContainer.css'
export default function CartItem() {
  return (
    <div className='cartItem'>
        <div className='cartImg'>
            <img src={m} alt="mobile" />
        </div>
        <div className='cartData'>
            <div className='cartDataUp'>
                <h4 className='cartDataUp_catagory'>Electronics</h4>
                <li className='cartDataUp_delete'><i className="fa-regular fa-trash-can"></i> Delete</li>
            </div>
            <p className='cartData_desc'>Samsung Galaxy A15 Dual SIM 4GB Ram+128GB ROM (6.5 Inches) (4G LTE) - Blue Black</p>
            <span className='cartData_rate'>4.5 <i className="fa-solid fa-star"></i></span>
            <p className='cartData_brand'>Brand : <span>Samsung</span></p>
            <div className='cartData_color'></div>
            <div className='cartDataUpDown'>
                <form className='cartDataUpDown_quantity'>
                    <label for="quantity">Quantity : </label>
                    <input id='quantuty' type='number' />
                </form>
                <p className='cartDataUpDown_price'>$ <span>300</span></p>
            </div>
        </div>
    </div>
  )
}
