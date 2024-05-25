import React from 'react'
import '../../Styles/Rating.css'

export default function RatingList() {
  return (
    <div className='rateItem'>
      <div className='rateData'>
        <h4 className='rateData_name'>Sayed Ali</h4>
        <p className='rateData_star'><span className='rateData_num'>4.8 </span> <i className="fa-solid fa-star"></i></p>
      </div>
      <p className='rateItem_desc'>Available at a reasonable price at the moment. Very good face and good armor</p>
    </div>
  )
}
