import React from 'react'
import '../../../Styles/Admin/AdminOrdersDetailsClient.css'

export default function AdminOrdersDetailsClient() {
  return (
    <div className='ClientData'>
      <h4 className='ClientData_title'>Client details</h4>
      <div className='ClientData_personal'>
        <p className='client_name'>Name : <span>Ahmed Saad</span></p>
        <p className='client_mobile'>Mobile No. : <span>01005845839</span></p>
        <p className='client_email'>Email : <span>Mss83@gmail.com</span></p>
      </div>
      <p className='ClientData_totalPrice'>Total <span>$ 600</span></p>
      <form className='ClientData_statusOrder'>
        <select name="status" id="status">
           <option value="Order" aria-readonly>Order Status</option>
            <option value="Underway">Underway</option>
            <option value="Been completed">Been Completed</option>
            <option value="Cancellation">Cancellation</option>
        </select>
        <input type='submit' value="Save" />
      </form>
    </div>
  )
}
