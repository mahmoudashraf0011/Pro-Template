import React from 'react'
import './../../../Styles/Admin/AdminAddCategory.css'
import { ToastContainer, toast } from 'react-toastify';
import { useParams } from 'react-router-dom';
import EditBrandHook from '../../../../LogicHooks/Admin/EditBrandHook';

export default function AdminEditBrand() {
    const {id}=useParams();
    const [name,img,press,load,handleIMGChange,handleNameChange,handleSubmit]=EditBrandHook(id);
  return (
    <div className='adminAddBrand'>
      <h2 style={{marginBottom:"20px"}}>Edit Brand # {name}</h2>
      <form className='addBrandForm'>
        <div className='brandImgContainer'>
            <h3>Edit Brand Image</h3>
            <label for='BrandIMG'><img src={img} alt='Brand' /></label>
            <input type='file' id='BrandIMG' hidden onChange={handleIMGChange}/>
        </div>
        <input type='text' className='brandName' placeholder='Add Brand Name...' onChange={handleNameChange} value={name} />
        <button className='addBrandSubmit' onClick={handleSubmit}>Update Modifications</button>
      </form>

    <ToastContainer />
  </div>
  )
}
