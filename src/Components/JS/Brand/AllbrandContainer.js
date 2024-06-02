import React from 'react'
import PageTitle from '../Utility/PageTitle'
import BrandCard from './BrandCard'
import Loding from '../Utility/Loading'

export default function AllbrandContainer({brand,load,id}) {
  return (
    <section className='allbrand'>

        <div className='container'>
            <PageTitle title="all brands" />
            <div className='brand_items'>
                
                {

                    load==false? brand.data?brand.data.map((item,i)=>{
                      return <BrandCard img={item.image} key={i} id={item._id}/>
                    }):<Loding/>:null


                }
            </div>
         </div>
    </section>
  )
}
