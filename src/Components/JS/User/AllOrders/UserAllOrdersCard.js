import React from 'react'
import m from '../../../../images/other/mobile.png'

export default function UserAllOrdersCard() {
  return (
    <div className='userAllOrdersCardItem'>
        <div className='userAllOrdersCardImg'>
            <img src={m} alt="mobile" />
        </div>
        <div className='userAllOrdersCardData'>
            <h4 className='userAllOrdersCard_catagory'>Electronics</h4>
            <p className='userAllOrdersCardData_desc'>Samsung Galaxy A15 Dual SIM 4GB Ram+128GB ROM (6.5 Inches) (4G LTE) - Blue Black</p>
            <span className='userAllOrdersCardData_rate'>4.5 <i className="fa-solid fa-star"></i></span>
            <div className='userAllOrdersCardDataUpDown'>
                <form className='userAllOrdersCardDataUpDown_quantity'>
                    <label for="quantity">Quantity : </label>
                    <input id='quantuty' type='number' />
                </form>
            </div>
        </div>
    </div>
  )
}
