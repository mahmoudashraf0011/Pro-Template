import React from 'react'
import '../../../Styles/Admin/AdminAllSubCate.css'
import Loding from '../../Utility/Loading'
import AdminAllSubCateCard from './AdminAllSubCateCard'

export default function AdminAllSubCate({items}) {
  return (
    <div className='AdminSubcates_items'>
        {
          items?items.map((item,i)=>{
            return <AdminAllSubCateCard item={item} key={i}/>
          }):<Loding />
      }
    </div>
  )
}