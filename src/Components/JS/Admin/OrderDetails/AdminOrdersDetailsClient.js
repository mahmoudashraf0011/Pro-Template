import React from 'react'
import '../../../Styles/Admin/AdminOrdersDetailsClient.css'
import UpdateOrderStatusHook from '../../../../LogicHooks/Orders/UpdateOrderStatusHook';
import { useParams } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

export default function AdminOrdersDetailsClient({order}) {
  const {id}=useParams();
  const [payStatus,deliverStatus,onChangePayStatus,onChangeDeliverStatus,onSubmitPay,onSubmitDeliver,payRef,deliverRef]=UpdateOrderStatusHook(id,order);

  return (
    <div className='ClientData'>
      <h4 className='ClientData_title'>Client details</h4>
      <div className='ClientData_personal'>
            <p className='client_name'>Name : <span>{order.user?order.user.name:""}</span></p>
            <p className='client_mobile'>Phone : <span>{order.user?order.user.phone:""}</span></p>
            <p className='client_email'>Email : <span>{order.user?order.user.email:""}</span></p>
            <p className='client_name'>Address : <span>{order.shippingAddress?order.shippingAddress.details:""}-{
            order.shippingAddress?order.shippingAddress.city:""} </span></p>
            <p className='payment_method'>Payment Method : <span>{order.paymentMethodType}</span></p>
      </div>
      <form className='ClientData_statusOrder'>
        <div className="ClientData_statusDeliver">
          <select name="deliver" id="deliver" onChange={onChangeDeliverStatus} value={deliverStatus} ref={deliverRef}>
            <option value="0" aria-readonly>Deliver Status</option>
            <option value="false" aria-readonly>not done</option>
            <option value="true">done</option>
          </select>
          <button className="SaveDeliver" onClick={onSubmitDeliver}>Save</button>
        </div>
        <div className="ClientData_statusDeliver">
          <select name="pay" id="pay" onChange={onChangePayStatus} value={payStatus} ref={payRef}>
            <option value="0" aria-readonly>Payment Status</option>
            <option value="false" aria-readonly>not done</option>
              <option value="true">done</option>
          </select>
          <button className="SavePay" onClick={onSubmitPay}>Save</button>
        </div>
      </form>
      <ToastContainer />
    </div>
  )
}