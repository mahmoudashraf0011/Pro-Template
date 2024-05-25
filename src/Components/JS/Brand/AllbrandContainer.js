import React from 'react'
import PageTitle from '../Utility/PageTitle'
import brand1 from '../../../images/other/brand1.png'
import brand2 from '../../../images/other/brand2.png'
import brand3 from '../../../images/other/brand3.png'
import BrandCard from './BrandCard'

export default function AllbrandContainer() {
  return (
    <section className='allbrand'>

        <div className='container'>
            <PageTitle title="all brands" />
            <div className='brand_items'>
                <BrandCard img={brand1}/>
                <BrandCard img={brand2}/>
                <BrandCard img={brand3}/>
                <BrandCard img={brand2}/>
                <BrandCard img={brand1}/>
                <BrandCard img={brand3}/>
                <BrandCard img={brand1}/>
                <BrandCard img={brand2}/>
                <BrandCard img={brand3}/>
                <BrandCard img={brand2}/>
                <BrandCard img={brand1}/>
                <BrandCard img={brand3}/>
            </div>
         </div>
    </section>
  )
}
