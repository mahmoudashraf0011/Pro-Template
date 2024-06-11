import React from 'react'
import UserAllOrdersItem from './UserAllOrdersItem'
import './../../../Styles/User/UserAllOrders.css'
import ViewAllOrdersHook from '../../../../LogicHooks/User/ViewAllOrdersHook'
import Paginate from '../../Utility/Paginate';

export default function UserAllOrders() {
  const [orders,results,paginate,onPress]=ViewAllOrdersHook();

  return (
    <div>
      <div>
        <h4 style={{marginBottom:"20px"}}>Number of Orders # {results?results:0} </h4>
        { 
          orders?orders.length?(
            orders.map((order)=>{
              return <UserAllOrdersItem  order={order}/>
            })
          ):<h2 className='noResult'>There are not orders</h2>:""
        }  
    
  
      </div>
      <div>
      {paginate >1?<Paginate pageCount={paginate} onPress={onPress} />:""}
      </div>
    </div>

  )
}
