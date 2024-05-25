import React from 'react'
import brand1 from '../../../images/other/brand1.png'
import brand2 from '../../../images/other/brand2.png'
import brand3 from '../../../images/other/brand3.png'
import BrandCard from './BrandCard'
import '../../Styles/HomeBrand.css'
import SectionTitle from '../Utility/SectionTitle'
export default function BrandContainer({title,btnTitle ,pathing}) {
  return (
    <section className='brand'>
      <SectionTitle title={title} btnTitle={btnTitle} pathing={pathing}/>
      <div className='container'>
        <div className='brand_items'>
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
