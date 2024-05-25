import React from 'react'
import { Link } from 'react-router-dom'

export default function GeneralCard({imgSrc,title,price,rate}) {
  return (
    <div className='best_item'>
      <div className='best_item_img'>
        <Link to="/allproducts/:id"><img src={imgSrc} alt="best" /></Link>
      </div>
      <li className='best_item_fav'><i className="fa-regular fa-heart"></i></li>
      <h3 className='best_item_title'>{title}</h3>
      <div className='best_item_more'>
        <span className='best_item_price'>$ <span>{price}</span></span>
        <span className='best_item_rate'>{rate} <i className="fa-solid fa-star"></i></span>
      </div>

    </div>
  )
}
