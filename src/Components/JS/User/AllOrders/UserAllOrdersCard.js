import React from 'react'
import m from '../../../../images/other/mobile.png'

export default function UserAllOrdersCard({item}) {


  return (
    
            <div className='userAllOrdersCardItem' style={{marginBottom:"15px"}}>
                <div className='userAllOrdersCardImg'>
                <img src={"http://127.0.0.1:8000/products/"+item.product.imageCover} alt="mobile" />
                </div>
                <div className='userAllOrdersCardData'>
                    <p className='userAllOrdersCardData_desc'>{item.product.title}</p>
                    <span className='userAllOrdersCardData_rate'>{item.product.ratingsAverage?item.product.ratingsAverage:0 }<i className="fa-solid fa-star"></i></span>
                    <div className='userAllOrdersCardDataUpDown'>
                        <div style={{backgroundColor:item.color,width:"30px",height:"30px",borderRadius:"50%",marginBottom:"10px"}}></div>
                        <div className='userAllOrdersCardDataUpDown_quantity'>
                            <span>Quantity : </span>
                            <span>{item.count}</span>
                        </div>
                    </div>
                </div>
            </div>

                   
  )
}
