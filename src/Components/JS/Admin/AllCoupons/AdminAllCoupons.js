import React from 'react'
import AdminAllCouponsCard from './AdminAllCouponsCard'
import '../../../Styles/Admin/AdminAllCouponsPage.css'
import Loding from '../../Utility/Loading'

export default function AdminAllCoupons({items}) {
  return (
    <div className='adminCoupons_items'>
      {
          items?items.map((item,i)=>{
            return <AdminAllCouponsCard item={item} key={i}/>
          }):<h2>There are no coupons</h2>
      }
    </div>
  )
}
