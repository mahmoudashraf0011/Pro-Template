import React from 'react'
import m from '../../../../images/other/mobile.png'
import { Link } from 'react-router-dom'
export default function AdminAllordersCard() {
  return (
    <div className='AdminAllordersItem'>
        <div className='AdminAllordersImg'>
            <img src={m} alt="mobile" />
        </div>
        <div className='AdminAllordersData'>
            <div className='AdminAllordersDataUp'>
                <p className='AdminAllordersDataUp_orderID'>Order No. #2321</p>
                <li className='AdminAllordersDataUp_delete'><i className="fa-regular fa-trash-can"></i> Delete</li>
            </div>
            <h4 className='AdminAllordersDataUp_catagory'>Electronics</h4>
            <p className='AdminAllordersData_desc'>Samsung Galaxy A15 Dual SIM 4GB Ram+128GB ROM (6.5 Inches) (4G LTE) - Blue Black</p>
            <span className='AdminAllordersData_rate'>4.5 <i className="fa-solid fa-star"></i></span>
            <p className='AdminAllordersData_brand'>Brand : <span>Samsung</span></p>
            <div className='AdminAllordersData_color'></div>
            <div className='AdminAllordersDataUpDown'>
                <form className='AdminAllordersDataUpDown_quantity'>
                    <label for="quantity">Quantity : </label>
                    <input id='quantuty' type='number' />
                </form>
                <p className='AdminAllordersDataUpDown_price'>$ <span>300</span></p>
            </div>
            <Link to="/admin/orders/:id" className='AdminAllordersData_Details'>Show Details</Link>
        </div>
    </div>
  )
}
