import React from 'react'
import AdminAllUsersCard from './AdminAllUsersCard'
import '../../../Styles/Admin/AdminAllUsers.css'
import Loding from '../../Utility/Loading'

export default function AdminAllUsers({items}) {
  return (
    <div className='adminAllUsersItems'>
           {
          items?items.map((item,i)=>{
            return <AdminAllUsersCard item={item}/>
          }):<Loding />
         
      }
    </div>
  )
}
