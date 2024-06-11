import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ModifyFavHook from '../../../LogicHooks/Favourite/ModifyFavHook'
import { ToastContainer } from 'react-toastify';

export default function GeneralCard({imgSrc,title,price,rate,id,q,favitems,product}) {
  const [icon,handleFav]=ModifyFavHook(id,favitems);

  let user='';
  if(localStorage.getItem("user")){
    user=JSON.parse(localStorage.getItem("user"));
  }

  return (
    <div className='best_item'>
      <div className='best_item_img'>
        <Link to={`/allproducts/${id}`}><img src={imgSrc} alt="best" /></Link>
      </div>
      <li className='best_item_fav'  ><i onClick={handleFav} style={{cursor:"pointer",color:"darkred"}} className={icon}></i></li>
      <h3 className='best_item_title'>{title}</h3>
      <div className='best_item_more'>
        <div className='best_item_price'>
          {
            product?(
              product.priceAfterDiscount?(
                <div><span style={{fontWeight:"bold"}}>${product.priceAfterDiscount}</span> <span style={{textDecoration:"line-through",fontSize:"16px"}}>${price}</span></div>
              ):(
                <span>${price}</span> 
              )
            ):""
      
          }
         </div>
        <span className='best_item_rate' >{rate} <i className="fa-solid fa-star"></i></span>

      </div>
      <ToastContainer />
       {q=="true"?<button className='show' onClick={()=>window.location.href=`/allproducts/${id}`}>Show Details</button>:''} 
    </div>
  )
}
