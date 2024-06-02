import React from 'react'
import '../../../Styles/Admin/AdminAllCategory.css'
import AdminAllCategoryCard from './AdminAllCategoryCard'
import Loding from '../../Utility/Loading'

export default function AdminAllCategorry({items}) {
  return (
    <div className='AdminCats_items'>
      {
          items?items.map((item,i)=>{
            return <AdminAllCategoryCard item={item} key={i}/>
          }):<Loding />
      }
    </div>
  )
}