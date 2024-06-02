import React from 'react'
import '../../Styles/Card/ProductDesc.css'
import { useParams } from 'react-router-dom';
import ProductDetailsHook from '../../../LogicHooks/Products/ProductDetailsHook';
export default function ProductDesc() {
  const {id}=useParams();
  const [item , imgs,cat,brand,likes]   =ProductDetailsHook(id);

  return (
    <div className='productDesc'>
        <h4 className='productDesc_category'>{cat}</h4>
        <p className='productDesc_title'>{item.title}</p>
        <span className='productDesc_rate'>{item.ratingsQuantity} <i class="fa-solid fa-star"></i></span>
        <p className='productDesc_brand'>Brand: <span>{brand}</span></p>
        <div className='productDesc_colors'>
        {
                item.availableColors? item.availableColors.map((color)=>{
                  return (
                    <div style={{backgroundColor:color}}></div>
                  )
                }):null
              }
        </div>
        <h4 className='productDesc_specific_title'>Specifications:</h4>
        <p className='productDesc_specific'>{item.description}</p>
        <div className='productDesc_data'>
            <span className='productDesc_price'>$ {item.price}</span>
            <button className='productDesc_add'>Add to CArt</button>
        </div>
    </div>
  )
}
