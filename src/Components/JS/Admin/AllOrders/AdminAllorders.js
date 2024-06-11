import React from 'react'
import '../../../Styles/Admin/AdminAllorders.css'
import AdminAllordersCard from './AdminAllordersCard'
import ViewAllOrdersHook from '../../../../LogicHooks/User/ViewAllOrdersHook';
import Paginate from '../../Utility/Paginate';
import FilterOrdersHook from '../../../../LogicHooks/Orders/FilterOrdersHook';

export default function AdminAllorders() {
  const [orders,results,paginate,onPress]=ViewAllOrdersHook();
  const  [choosePayMethod,choosePay,chooseDeliver,filterOrders,filterPaginate,onPressFilter,onChoosePayMethod,onChoosePay,onChooseDeliver,onSubmitFilter,onSubmitAll]=FilterOrdersHook(orders,paginate,onPress);
 

  return (
    <div className='AdminAllorders_items'>
      <div className='Filter_orders'>
        <form>
           <div className="Filter_PayWay">
              <select name="payWay" id="payWay" onChange={onChoosePayMethod} value={choosePayMethod}>
                <option value="0" aria-readonly>Payment Method</option>
                <option value="cash" aria-readonly>cash</option>
                <option value="card">card</option>
              </select>
            </div>
            <div className="Filter_statusDeliver">
              <select name="deliver" id="deliver" onChange={onChooseDeliver} value={chooseDeliver}>
                <option value="0" aria-readonly>Deliver Status</option>
                <option value="false" aria-readonly>not done</option>
                <option value="true">done</option>
              </select>
            </div>
            <div className="Filter_statusPay" onChange={onChoosePay} value={choosePay}>
              <select name="pay" id="pay">
                <option value="0" aria-readonly>Payment Status</option>
                <option value="false" aria-readonly>not done</option>
                  <option value="true">done</option>
              </select>
            </div>
            <button className="submitFilter" onClick={onSubmitFilter} >Filter</button>
            <button className="submitAll submitFilter" onClick={onSubmitAll} >All</button>
        </form>
      </div>
      {
  

    filterOrders.length > 0?filterOrders.map((order)=>{
      return <AdminAllordersCard  order={order}/>
    }):<h2 className='noResult'>There are not orders</h2>
 
        }
      {
        filterPaginate > 1?<Paginate pageCount={filterPaginate} onPress={filterPaginate == paginate?onPress:onPressFilter} />:""
      } 
    </div>
  )
}
