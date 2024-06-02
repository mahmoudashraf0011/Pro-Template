import React from 'react'
import '../../Styles/Utility/ResultCount.css'
import SortHook from '../../../LogicHooks/Search/SortHook'

export default function ResultCount({result}) {
const [chooseSort]=SortHook();
  return (
    <div className='resultCount'>
      <div className='container'>
        <div className='resultCount_items'>
            <p className='searchResult'>Search Results : <span className='searchResult_num'>{result}</span></p>
            <div className='searchSort'>
                <li className='searchSort_link'>Sorted By <i className="fa-solid fa-arrow-down-wide-short"></i>
                    <ul className='searchSort_dropdown'>
                        <li onClick={()=>chooseSort("")}>Without Sort</li>
                        <li onClick={()=>chooseSort("best")}>best seller</li>
                        <li onClick={()=>chooseSort("rate")}>Highest rated</li>
                        <li onClick={()=>chooseSort("priceDown")}>Price from lowest to highest</li>
                        <li onClick={()=>chooseSort("priceUP")}>Price from highest to lowest</li>
                    </ul>
                </li>
            </div>
        </div>

      </div>
    </div>
  )
}
