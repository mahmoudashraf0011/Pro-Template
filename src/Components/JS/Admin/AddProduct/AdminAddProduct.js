import React, { useEffect, useState } from 'react'
import Multiselect from 'multiselect-react-dropdown';
import './../../../Styles/Admin/AdminAddProduct.css'
import MultiImageInput from 'react-multiple-image-input';
import { CompactPicker } from 'react-color'
import Loding from '../../Utility/Loading';
import { ToastContainer, toast } from 'react-toastify';
import AddProductHook from '../../../../LogicHooks/Admin/AddProductHook';
export default function AdminAddProduct() {
    const [images,options,name,desc,priceBefore,priceAfter,qty,selectedSubcat,colors,showColor,category,brand,catID,brandID,handelChangeDesc,handelChangeName,handelChangePriceAfter,handelChangePriceBefore,handelChangeQty,handleChangeBrand,handleChangeMainCat,handleChooseColor,handleSubmit , onRemove,onSelect,deleteColor,setImages,setShowColor] = AddProductHook();

  return (
    <div className='adminAddproduct'>
        <form className='addproductForm'>
            <div className='productImgContainer'>
            <h5>Add Product Images Max 3</h5>
            <MultiImageInput
            images={images}
            setImages={setImages}
            theme={"light"}
            allowCrop={false}
            max={3}
            
            />
            </div>
            <input type='text' className='productName common' placeholder='Product Name' value={name} onChange={handelChangeName}/>
            <textarea className='productDesc common' placeholder='Description For Product' rows="3" value={desc} onChange={handelChangeDesc}></textarea>
            <input className='productDiscount common' placeholder='Product Price Before Discount' type='number' value={priceBefore} onChange={handelChangePriceBefore}/>
            <input className='productPrice common' placeholder='Product Price After Discount' type='number' value={priceAfter} onChange={handelChangePriceAfter}/>
            <input className='productQty common' placeholder='Product Quantity' type='number'value={qty} onChange={handelChangeQty}/>
            <select name="productCategory" id="productCategory" className='common' onChange={handleChangeMainCat}>
                <option value="0">Select Main Category</option>
                {
                    category.data?category.data.map((item)=>{
                        return(
                            <option value={item._id} key={item._id}>{item.name}</option>
                        )

                    }):<Loding />
                }
            </select>
            <Multiselect
                        className="productSubCategory common"
                        placeholder="Sub Category"
                        options={options}
                        onSelect={onSelect}
                        onRemove={onRemove}
                        displayValue="name"
                       
                    />
            <select name="productBrand" id="productBrand" className='common' onChange={handleChangeBrand} >
                <option value="0">Select Product Brand</option>
                {
                    brand.data?brand.data.map((item)=>{
                        return(
                            <option value={item._id} key={item._id}>{item.name}</option>
                        )

                    }):<Loding />
                }
            </select>
            <div className='productColors'>
                <h6 className='productColorsTitle'>Available Colors for Product</h6>
                <ul className='productColorsList'>
              
                    {
                        colors?colors.map((color)=>{
                            return (
                                <li style={{backgroundColor:color}} onClick={()=>deleteColor(color)} ></li>
                        
                            )
                        }):null
                    }
                    <li className='moreColor' onClick={()=>setShowColor(!showColor)}><i className="fa-solid fa-plus"></i></li>
                    {
                        showColor==true?<CompactPicker onChangeComplete={handleChooseColor}/>:null
                    }

                </ul>
            </div>
            <button className='addproductSubmit' onClick={handleSubmit}>Save Modifications</button>
        </form>
        <ToastContainer />
  </div>
  )
}
