import React, { useEffect } from 'react'
import AdminAllReviewsCard from './AdminAllReviewsCard'
import '../../../Styles/Admin/AdminAllRevews.css'
import Loding from '../../Utility/Loading'

export default function AdminAllReviews({items}) {
if (items) {
  console.log(items.length);
}

  return (

    <div className='adminReviewItems'>
      {
          items?items.map((item,i)=>{
            return <AdminAllReviewsCard item={item} prodID={item.product} key={i}/>
          }):<Loding />
         
      }
    </div>
  )
}
