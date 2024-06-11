import React, { useState } from 'react'
import '../../Styles/Card/ProductDesc.css'
import { useParams } from 'react-router-dom';
import ProductDetailsHook from '../../../LogicHooks/Products/ProductDetailsHook';
import AddToCartHook from '../../../LogicHooks/Cart/AddToCartHook';
import { ToastContainer } from 'react-toastify';
export default function ProductDesc({rateVal}) {
  const {id}=useParams();
  const [item , imgs,cat,brand,likes]   =ProductDetailsHook(id);
  const [color,index,handleColor,onSubmit]=AddToCartHook(id,item);
  return (
    <div className='productDesc'>
        <h4 className='productDesc_category'>{cat}</h4>
        <p className='productDesc_title'>{item.title}</p>
        <span className='productDesc_rate'>{item.ratingsAverage?item.ratingsAverage:0} <i class="fa-solid fa-star"></i></span>
        <p className='productDesc_brand'>Brand: <span>{brand}</span></p>
        <p className='productDesc_Q'>Quantity: <span>{item.quantity}</span></p>
        <div className='productDesc_colors'>
        {
                item.availableColors? item.availableColors.map((color,i)=>{
                  return (
                    <div style={{backgroundColor:color,cursor:"pointer",border:"1px solid #000",padding:"5px",outline:index==i?"5px solid #000" : "0"}} key={i} onClick={()=>handleColor(color,i)}></div>
                  )
                }):null
              }
        </div>
        <h4 className='productDesc_specific_title'>Specifications:</h4>
        <p className='productDesc_specific'>{item.description}</p>
        <div className='productDesc_data'>
          <div div className='productDesc_price'>
            {
            item.priceAfterDiscount?(
              <div><span style={{fontWeight:"bold"}}>${item.priceAfterDiscount}</span> <span style={{textDecoration:"line-through",fontSize:"14px"}}>${item.price}</span></div>
            ):(
              <span>${item.price}</span> 
            )
          }
            </div>
            <button className='productDesc_add' onClick={onSubmit}>Add to Cart</button>
        </div>
 
    </div>
  )
}
