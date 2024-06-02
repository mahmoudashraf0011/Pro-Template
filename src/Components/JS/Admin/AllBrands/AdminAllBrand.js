import React from 'react'
import '../../../Styles/Admin/AdminAllBrand.css'
import Loding from '../../Utility/Loading'
import AdminAllBrandCard from './AdminAllBrandCard'

export default function AdminAllBrand({items}) {
  return (
    <div className='AdminBrandsitems'>
       {
          items?items.map((item,i)=>{
            return <AdminAllBrandCard item={item} key={i}/>
          }):<Loding />
      } 
    </div>
  )
}