import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import Loding from '../../Utility/Loading';
import '../../../Styles/Admin/AdminAddSubcategory.css'
import AddSubcategoryHook from '../../../../LogicHooks/Admin/AddSubcategoryHook'
export default function AdminAddSubcategory() {
  const [name,ID,category,load,press,handleSubmit,handleChangeName,handleChangeSelect]=AddSubcategoryHook();
  return (
    <div>     
      <form className='AdminAddSubcategoryForm'>
        <input type='text' placeholder='Subcategory Name' className='subcategory_title' onChange={handleChangeName} value={name}/>
        <select name="cates" id="categories" onChange={handleChangeSelect} value={ID}>
            <option value="0">Select Main Category</option>
            {

                category.data?category.data.map((item,i)=>{
                return <option value={item._id} key={i}>{item.name}</option>
              }):<Loding/>

            }
        </select>
        <button className='subCatagorySubmit' onClick={handleSubmit}>Save modifications</button>
        <ToastContainer />
      </form>
     {
      press?load?<Loding/>:<h2>Finish</h2>:null
     }
    
    </div>
  )
}
