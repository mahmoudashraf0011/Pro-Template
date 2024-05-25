import React from 'react'
import '../../../Styles/Admin/AdminAllorders.css'
import AdminAllordersCard from './AdminAllordersCard'

export default function AdminAllorders() {
  return (
    <div className='AdminAllorders_items'>
      <AdminAllordersCard />
      <AdminAllordersCard />
      <AdminAllordersCard />
    </div>
  )
}
