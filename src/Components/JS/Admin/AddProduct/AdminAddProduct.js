import React from 'react'
import Multiselect from 'multiselect-react-dropdown';
import avatar from '../../../../images/other/avatar.png'
import './../../../Styles/AdminAddProduct.css'
export default function AdminAddProduct() {
    const onSelect = () => {

    }
    const onRemove = () => {

    }

    const options = [
        { name: "First Category", id: 1 },
        { name: "Second Category", id: 2 },
        { name: "Third Category", id: 2 },
    ];
  return (
    <div className='adminAddproduct'>
        <form className='addproductForm'>
            <div className='productImgContainer'>
                <label for='productIMG'>Add product Image : </label>
                <input type='file' id='productIMG' />
                <img src={avatar} alt='product' />
            </div>
            <input type='text' className='productName common' placeholder='Product Name'/>
            <textarea className='productDesc common' placeholder='Description For Product' rows="3"></textarea>
            <input className='productDiscount common' placeholder='Product Price After Discount' type='number'/>
            <input className='productPrice common' placeholder='Product Price' type='number'/>
            <select name="productCategory" id="productCategory" className='common'>
                <option value="main" hidden>Main Category</option>
                <option value="First">First Category</option>
                <option value="Second">Second Category</option>
                <option value="Third">Third Category</option>
            </select>
            <Multiselect
                        className="productSubCategory common"
                        placeholder="Sub Category"
                        options={options}
                        onSelect={onSelect}
                        onRemove={onRemove}
                        displayValue="name"
                        style={{ color: "red" }}
                    />
            <select name="productBrand" id="productBrand" className='common'>
                <option value="main" hidden>Product Brand</option>
                <option value="Apple">Apple</option>
                <option value="Samsung">Samsung</option>
                <option value="Xaomi">Xaomi</option>
            </select>
            <div className='productColors'>
                <h6 className='productColorsTitle'>Available Colors for Product</h6>
                <ul className='productColorsList'>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li className='moreColor'><i className="fa-solid fa-plus"></i></li>
                </ul>
            </div>
            <button className='addproductSubmit'>Save Modifications</button>
        </form>
  </div>
  )
}
