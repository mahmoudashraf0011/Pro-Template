import React from 'react'
import { ToastContainer } from 'react-toastify';
import EditCouponHook from '../../../../LogicHooks/Admin/EditCouponHook';
import { useParams } from 'react-router-dom';

export default function AdminEditCoupon() {
    const {id}=useParams()

    const [name,expire,discount,onChangeName,onChangeExpire,onChangeDiscount,onSubmit]=EditCouponHook(id);
  return (
    <div className='adminAddcoupon'>

 
    <form className='addcouponForm'>
      <input type='text' className='couponName' placeholder='Coupon Name...' value={name} onChange={onChangeName}/>
      <input type='text' className='couponName' placeholder='Expiry Date...'  value={expire} onChange={onChangeExpire}/>
      <input type='number' className='couponName' placeholder='Discount Percentage' max={100} value={discount} onChange={onChangeDiscount} />
      <button className='addcouponSubmit' onClick={onSubmit} >Save Modifications</button>
  
      <ToastContainer />

    </form>


  </div>
  )
}
