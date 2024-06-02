import React, { useEffect } from 'react'
import GalleryCard from './GalleryCard'
import ProductDesc from './ProductDesc'
import '../../Styles/Card/ProductDetailsComtainer.css'
import { useParams } from 'react-router-dom';

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
