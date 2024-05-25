import React from 'react'
import '../../Styles/Home/Discount.css'
import bg from "../../../images/other/laptops.png";
export default function Discount() {
  return (
    <section className='discount'> 
        <div className='container'>
            <div className='discount_items'>
                <div className='discount_img'>
                    <img src={bg} alt="bg" />?
                </div>
                <h2 className='discount_title'>Discount up to 30% on laptops</h2>
            </div>
        </div>

    </section>
  )
}
