import React, { useEffect, useState } from 'react'
import '../../../Styles/Admin/AdminAllCategory.css'
import AdminAllCategoryCard from './AdminAllCategoryCard'
import Loding from '../../Utility/Loading'

export default function AdminAllCategorry({items}) {
  console.log("Ss",items);
  return (
    <div className='AdminCats_items'>
      { 

          items?items.map((item,i)=>{
            return <AdminAllCategoryCard item={item} key={i}/>
          }):<h2>No Categories</h2>
      }
    </div>
  )
}