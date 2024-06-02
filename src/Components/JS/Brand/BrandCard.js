import React from 'react'
import { Link } from 'react-router-dom'

export default function BrandCard({img,load,id}) {
  return (
    <div className='brand_item'>
      <Link to={`/allproduct/brand/${id}` }>
        <div className='brand_item_bg'>
          <img src={img} alt="brand" />
        </div>
      </Link>
    </div>
  )
}
