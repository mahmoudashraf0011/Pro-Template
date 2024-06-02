import React from 'react'
import './../../../Styles/Admin/AdminAddBrand.css'
import av from './../../../../images/other/avatar.png'
import AddBrandHook from '../../../../LogicHooks/Admin/AddBrandHook'
import Loding from '../../Utility/Loading';
import { ToastContainer, toast } from 'react-toastify';
export default function AdminAddBrand() {
  const [name,img,press,load,handleIMGChange,handleNameChange,handleSubmit]=AddBrandHook();
  return (
    <div className='adminAddBrand'>
      <form className='addBrandForm'>
        <div className='brandImgContainer'>
            <h3>Add Brand Image</h3>
            <label for='BrandIMG'><img src={img} alt='Brand' /></label>
            <input type='file' id='BrandIMG' hidden onChange={handleIMGChange}/>
        </div>
        <input type='text' className='brandName' placeholder='Add Brand Name...' onChange={handleNameChange} value={name} />
        <button className='addBrandSubmit' onClick={handleSubmit}>Save Modifications</button>
      </form>
      {
        press?load?<Loding />:<h2>Finish</h2>:null
      }
      <ToastContainer />
      
    </div>
  )
}
