import React from 'react'
import m from '../../../../images/other/mobile.png'
import { Link } from 'react-router-dom'
export default function AdminAllordersCard({order}) {
 
  return (
    <div className='AdminAllordersItem' style={{backgroundColor:order.isPaid==true && order.isDelivered== true?"#3367AB":"#ddd" }} >
        <div className='AdminAllordersData'>
            <div className='AdminAllordersData_up'>
                <h5>Order No. <span>{order.id}</span></h5>
                {
                    order.isPaid==true && order.isDelivered ==true?<i class="fa-solid fa-check"></i>:""
                }
                
            </div>
            <div className='adminOrder_userData'>
                <p>Requested by : <span> {order.user.name} && {order.user.email}</span></p>
        
            </div>
            <div className='AdminAllordersDataUpDown'>
                <div className='status'>
                    <p className='Deliver_status'>Deliver Status : <span>{order.isDelivered == false?"Not Done":"Done"}</span></p>
                    <p className='Pay_status'> Payment Status : <span>{order.isPaid == false?"Not Done":"Done"}</span></p>
                    <p className='payWay_status'>Payment Method : <span>{order.paymentMethodType}</span></p>
                </div>
             
            </div>
            <div className='adminAllOrdersDown'>
                <Link to={`/admin/orders/${order._id}`} className='AdminAllordersData_Details'>Show Details</Link>
                <p className='AdminAllordersDataUpDown_price'>$ <span>{order.totalOrderPrice}</span></p>
            </div>
     
        </div>
    </div>
  )
}
