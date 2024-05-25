import React from 'react'
import './../../../Styles/AdminAddBrand.css'
import av from './../../../../images/other/avatar.png'

export default function AdminAddBrand() {
  return (
    <div className='adminAddBrand'>
      <form className='addBrandForm'>
        <div className='brandImgContainer'>
            <label for='brandIMG'>Add Brand Image : </label>
            <input type='file' id='brandIMG' />
          <img src={av} alt='brand' />
        </div>
        <input type='text' className='brandName' placeholder='Add Brand Name...' />
        <button className='addBrandSubmit'>Save Modifications</button>
      </form>
    </div>
  )
}
