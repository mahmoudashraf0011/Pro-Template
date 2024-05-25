import React from 'react'
import '../../Styles/CategorySearch.css'

export default function CategorySearch() {
  return (
    <div className='categorySearch'>
      <div className='container'>
        <ul className='categorySearchList'>
            <li><a>All</a></li>
            <li><a>Best</a></li>
            <li><a>New</a></li>
            <li><a>Recent</a></li>
            <li><a>Top</a></li>
            <li><a>Discount</a></li>
            <li><a>offers</a></li>
            <li><a>Devices</a></li>
            <li><a>Electronics</a></li>
            <li><a>More</a></li>
        </ul>
      </div>
    </div>
  )
}
