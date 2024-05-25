import React from 'react'
import '../../../Styles/User/UserEditAddress.css'

export default function UserEditAddress() {
  return (
    <div className='UserEditAddress'>
        <form className='UserEditAddress_form'>
            <input type='text' className='UserEditAddress_title common' value="Work"/>
            <textarea rows="4" cols="20" value="Cairo, Dar es Salaam " className='UserEditAddress_desc common'></textarea>
            <input type="number" className='UserEditAddress_mobile common' value="01294672818"/>
            <button className='UserEditAddress_submit'>Save Edited Address</button>
        </form>
    </div>
  )
}
