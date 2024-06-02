import React from 'react'
import AdminAllproductsCard from './AdminAllproductsCard'
import '../../../Styles/Admin//AdminAllproducts.css'
import Loding from '../../Utility/Loading'

export default function AdminAllproducts({products}) {
  return (
    <div className='AdminAllproducts'>
      {
          products?products.map((item,i)=>{
            return <AdminAllproductsCard item={item} key={i}/>
          }):<Loding/>
      }
    </div>
  )
}
