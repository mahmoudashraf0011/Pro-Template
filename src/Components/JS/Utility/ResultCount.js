import React from 'react'
import '../../Styles/ResultCount.css'

export default function ResultCount({result}) {
  return (
    <div className='resultCount'>
      <div className='container'>
        <div className='resultCount_items'>
            <p className='searchResult'>Search Results : <span className='searchResult_num'>{result}</span></p>
            <div className='searchSort'>
                <li className='searchSort_link'>Sorted By <i className="fa-solid fa-arrow-down-wide-short"></i>
                    <ul className='searchSort_dropdown'>
                        <li>best seller</li>
                        <li>Highest rated</li>
                        <li>Price from lowest to highest</li>
                        <li>Price from highest to lowest</li>
                    </ul>
                </li>
            </div>
        </div>

      </div>
    </div>
  )
}
