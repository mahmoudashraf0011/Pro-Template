import React from 'react'
import '../../Styles/Card/ProductDesc.css'

export default function ProductDesc() {
  return (
    <div className='productDesc'>
        <h4 className='productDesc_category'>Electronics:</h4>
        <p className='productDesc_title'>Xiaomi VXN4304GL Redmi Fast Charge Power Bank 20000mAh - black</p>
        <span className='productDesc_rate'>4.5 <i class="fa-solid fa-star"></i></span>
        <p className='productDesc_brand'>Brand: <span>Apple</span></p>
        <div className='productDesc_colors'>
            <div></div>
            <div></div>
            <div></div>
        </div>
        <h4 className='productDesc_specific_title'>Specifications:</h4>
        <p className='productDesc_specific'>AI Features: Search like never before, get real-time interpretation on a call, format your notes into a clear summary and effortlessly edit your photos - all from your smartphone, all with AI.Armor up with titanium: With a durable shield of titanium built right into the frame and better scratch resistance with Corning IP68 water and dust resistant Galaxy S24 Ultra is ready for adventure.Built-in S Pen writes a new chapter: The legacy of Galaxy Note is alive and well. Write, tap and navigate with precision your fingers wish they had on the new, flat display.200MP. Details that rival reality: Capture stunning details with the most meg</p>
        <div className='productDesc_data'>
            <span className='productDesc_price'>$5400</span>
            <button className='productDesc_add'>Add to CArt</button>
        </div>
    </div>
  )
}
