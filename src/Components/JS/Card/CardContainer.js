import React from 'react'
import SectionTitle from '../Utility/SectionTitle'
import b1 from '../../../images/1.png'
import b2 from '../../../images/2.png'
import b3 from '../../../images/5.png'
import b4 from '../../../images/6.png'

import '../../Styles/Card/Card.css'
import GeneralCard from './GeneralCard'
import Loding from '../Utility/Loading'
import AllFavHook from '../../../LogicHooks/Favourite/AllFavHook'

export default function CardContainer({title,btnTitle,pathing,products,id,q}) {
  const [favitems,items] =AllFavHook();
  return (
    <section className='best' id={id}>
      <SectionTitle title={title} btnTitle={btnTitle} pathing={pathing}/>
      <div className='container'>
        <div className='best_items'>

            {
              products?products.map((product,i)=>{
                return <GeneralCard favitems={favitems} q={q} id={product._id}imgSrc={product.imageCover} title={product.title} price={product.price} rate={product.ratingsAverage?product.ratingsAverage:0} product={product}/>
              }):<Loding/>
            }
        </div>
      </div>
    </section>
  )
}
