import React from 'react'
import GalleryCard from './GalleryCard'
import ProductDesc from './ProductDesc'
import '../../Styles/ProductDetailsComtainer.css'

export default function ProductDetailsComtainer() {
  return (
    <div>
      <div className='container'>
        <div className='productDetails_items'>
            <GalleryCard />
            <ProductDesc />
        </div>
      </div>
    </div>
  )
}
