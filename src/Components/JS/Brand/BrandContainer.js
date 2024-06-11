import React from 'react'
import BrandCard from './BrandCard'
import '../../Styles/Brand/Brand.css'
import SectionTitle from '../Utility/SectionTitle'
import HomeBrandHook from '../../../LogicHooks/Brands/HomeBrandHook'
import Loding from '../Utility/Loading'
export default function BrandContainer({title,btnTitle ,pathing}) {
  const [brand,load]=HomeBrandHook();
  return (
    <section className='brand' id='brands'>
      <SectionTitle title={title} btnTitle={btnTitle} pathing={pathing}/>
      <div className='container'>
        <div className='brand_items'>
            
            {

              load==false? brand.data?brand.data.slice(0,5).map((item,i)=>{
                return <BrandCard img={item.image.length>100?item.image.slice(29):item.image} key={i} id={item._id}/>
              }):<Loding/>:null


            }
        </div>
      </div>
    </section>
  )
}
