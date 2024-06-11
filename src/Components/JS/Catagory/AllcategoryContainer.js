import React from 'react'
import CatagoryCard from './CatagoryCard'
import PageTitle from '../Utility/PageTitle';
import Loding from '../Utility/Loading';


export default function AllcategoryContainer({category,load,id}) {
  return (
    <section className='allCategory'> 
      <div className='container'>
        <PageTitle title="all categories" />
        <div className='catagory_items'>
        {

          load==false? category.data?category.data.map((item,i)=>{
            return <CatagoryCard key={i} imgSrc={item.image.length>100?item.image.slice(33):item.image} catagory={item.name} id={item._id}/>
          }):<Loding/>:null


        }

        </div>
      </div>

    </section>
  )
}
