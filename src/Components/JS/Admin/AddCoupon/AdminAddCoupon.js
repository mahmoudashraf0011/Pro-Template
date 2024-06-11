import React, { useRef } from 'react'
import '../../../Styles/Admin/AdminAddCoupon.css'
import AdminAddCouponHook from '../../../../LogicHooks/Admin/AdminAddCouponHook';
import { ToastContainer, toast } from 'react-toastify';
import Notify from '../../Utility/Notify';

const AdminAddCoupon = () => {
    const date=useRef();
    const [name,expire,discount,onChangeName,onChangeExpire,onChangeDiscount,onSubmit]=AdminAddCouponHook();
  return (
    <div className='adminAddcoupon'>

 
    <form className='addcouponForm'>
      <input type='text' className='couponName' placeholder='Coupon Name...' value={name} onChange={onChangeName}/>
      <input ref={date} type='text' className='couponName' placeholder='Expiry Date...' 
       onFocus={()=>date.current.type="date"} onBlur={()=>date.current.type="text"} value={expire} onChange={onChangeExpire}/>
      <input type='number' className='couponName' placeholder='Discount Percentage' max={100} value={discount} onChange={onChangeDiscount} />
      <button className='addcouponSubmit' onClick={onSubmit} >Save Modifications</button>
  
      <ToastContainer />

    </form>


  </div>
  )
}

export default AdminAddCoupon

