import React from 'react'

export default function BrandCard({img}) {
  return (
    <div className='brand_item'>
      <div className='brand_item_bg'>
        <img src={img} alt="brand" />
      </div>
    </div>
  )
}
