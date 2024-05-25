import React from 'react'
import '../../../Styles/UserAddAddress.css'

export default function UserAddAddress() {
  return (
    <div className='UserAddAddress'>
        <form className='UserAddAddress_form'>
            <input type='text' className='UserAddAddress_title common' placeholder="House"/>
            <textarea rows="4" cols="20" placeholder="Menoufia, west of Quesna" className='UserAddAddress_desc common'></textarea>
            <input type="number" className='UserAddAddress_mobile common' placeholder="01294672818"/>
            <button className='UserAddAddress_submit'>Add Address</button>
        </form>
    </div>
  )
}
