import React from 'react'
import '../../../Styles/User/UserEditAddress.css'

import EditAddressHook from '../../../../LogicHooks/User/EditAddressHook';
import { useParams } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
export default function UserEditAddress() {
  const {id}=useParams();
  const [alias,desc,mobile,city,post,onChangeAlias,onChangeDesc,onChangeMobile,onChangeCity,onChangePost,onSubmit]=EditAddressHook(id);

  return (
    <div className='UserEditAddress'>
        <form className='UserEditAddress_form'>
        <input type='text' className='UserAddAddress_title common' placeholder="Address Alias for Example (Home-Work)" value={alias} onChange={onChangeAlias}/>
            <textarea rows="3" cols="20" placeholder="Address in Details" className='UserAddAddress_desc common' value={desc} onChange={onChangeDesc}></textarea>
            <input type="number" className='UserAddAddress_mobile common' placeholder="Mobile Number" value={mobile} onChange={onChangeMobile}/>
            <input type="text" className='UserAddAddress_city common' placeholder="Address City" value={city} onChange={onChangeCity}/>
            <input type="text" className='UserAddAddress_postCode common' placeholder="Address PostalCode" value={post} onChange={onChangePost}/>
            <button className='UserAddAddress_submit' onClick={onSubmit}>Save Modifications</button>
            <ToastContainer />
        </form>
    </div>
  )
}
