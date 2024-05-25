import React from 'react'
import { Link } from 'react-router-dom'
import b1 from '../../../../images/other/item.png'
export default function AdminAllproductsCard() {
  return (
    <div className='AdminAllProduct_item'>
     <div className='AdminAllProduct_item_modify'>
        <button className='AdminAllProduct_item_modify_edit'>Edit</button>
        <button className='AdminAllProduct_item_modify_delete'>Delete</button>
     </div>
      <div className='AdminAllProduct_item_img'>
        <Link to="/allproducts/:id"><img src={b1} alt="best" /></Link>
      </div>
      <h3 className='AdminAllProduct_item_title'>Amet augue justo</h3>
      <div className='AdminAllProduct_item_more'>
        <span className='AdminAllProduct_item_price'>$ <span>200</span></span>
        <span className='AdminAllProduct_item_rate'>4.2 <i className="fa-solid fa-star"></i></span>
      </div>

    </div>
  )
}
