import React from 'react'
import { Link } from 'react-router-dom'

export default function CatagoryCard({imgSrc,catagory,id}) {
  return (
    <div className='catagory_item'>
      <Link to={`/allproduct/category/${id}` }>
        <div className='catagory_item_img'>
          <img src={imgSrc} alt='catagory' />
        </div>
        <h3 className='catagory_item_title'>{catagory}</h3>
      </Link>
    </div>
  )
}
