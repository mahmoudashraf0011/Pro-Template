import React from 'react'
import SectionTitle from  '../../../Components/JS/Utility/SectionTitle'
import AdminSidbar from '../../../Components/JS/Admin/AdminSidbar'
import '../../Styles/AdminPage.css'
import '../../Styles/AdminAllUserPage.css'
import  Paginate from '../../../Components/JS/Utility/Paginate'
import AdminAllUsers from '../../../Components/JS/Admin/AllUsers/AdminAllUsers'
import { NavLink } from 'react-router-dom'
import ViewAllusersHook from '../../../LogicHooks/Admin/ViewAllusersHook'
export default function AdminAllUsersPage() {
    const [items,pagintate,onPress]=ViewAllusersHook();

  return (
    <div className='AdminPage'>
        <div className='container'>
            <div className='AdminPage_items'>
                <AdminSidbar />
                <div className='AdminPage_item'>
                    <SectionTitle title="Manage all useres"/>
                    <NavLink  to="/admin/create-user" className='adminCreateUserButton'>Create New User</NavLink >
                    <div className='both'></div>
                    <AdminAllUsers items={items}/>

                </div>
            </div>
            <Paginate pageCount={pagintate} onPress={onPress}/>
        </div>
  

    </div>
  )
}
