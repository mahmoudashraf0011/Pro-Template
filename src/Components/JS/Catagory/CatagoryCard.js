import React from 'react'

export default function CatagoryCard({imgSrc,catagory}) {
  return (
    <div className='catagory_item'>
      <div className='catagory_item_img'>
        <img src={imgSrc} alt='catagory' />
      </div>
      <h3 className='catagory_item_title'>{catagory}</h3>
    </div>
  )
}
