import React from 'react'
import '../../../Styles/User/UserAddAddress.css'
import AddUserHook from '../../../../LogicHooks/User/AddAddressHook'
import { ToastContainer } from 'react-toastify';
import AddAddressHook from '../../../../LogicHooks/User/AddAddressHook';

export default function UserAddAddress() {
  const [alias,desc,mobile,city,post,onChangeAlias,onChangeDesc,onChangeMobile,onChangeCity,onChangePost,onSubmit]=AddAddressHook();
  return (
    
    <div className='UserAddAddress'>
        <form className='UserAddAddress_form'>
            <input type='text' className='UserAddAddress_title common' placeholder="Address Alias for Example (Home-Work)" value={alias} onChange={onChangeAlias}/>
            <textarea rows="3" cols="20" placeholder="Address in Details" className='UserAddAddress_desc common' value={desc} onChange={onChangeDesc}></textarea>
            <input type="number" className='UserAddAddress_mobile common' placeholder="Mobile Number" value={mobile} onChange={onChangeMobile}/>
            <input type="text" className='UserAddAddress_city common' placeholder="Address City" value={city} onChange={onChangeCity}/>
            <input type="text" className='UserAddAddress_postCode common' placeholder="Address PostalCode" value={post} onChange={onChangePost}/>
            <button className='UserAddAddress_submit' onClick={onSubmit}>Add Address</button>
        </form>
        <ToastContainer />
    </div>
  )
}
