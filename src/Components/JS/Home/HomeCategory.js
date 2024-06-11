import React, { useEffect } from 'react'
import SectionTitle from '../Utility/SectionTitle'
import CatagoryCard from '../Catagory/CatagoryCard'
import '../../Styles/Catagory/Catagory.css'
import HomeCategoryHook from '../../../LogicHooks/Categories/HomeCategoryHook'
import Loding from '../Utility/Loading';
import { Link } from 'react-router-dom'

export default function HomeCategory({title,btnTitle,pathing} ) {

  const [category,load]=HomeCategoryHook();
  return (
    <section className='catagory' id='cates'>
      <SectionTitle title={title} btnTitle={btnTitle} pathing={pathing}/>
      <div className='container'>
        <div className='catagory_items'>
          {

            load==false? category.data?category.data.slice(0,4).map((item, i)=>{
              return <CatagoryCard key={i} imgSrc={item.image.length>100?item.image.slice(33):item.image} catagory={item.name} id={item._id}/>
            }):<Loding/>:null
           

          }


        </div>
      </div>
    </section>
  )
}
