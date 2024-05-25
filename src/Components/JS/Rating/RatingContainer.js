import React from 'react'
import RatingPost from './RatingPost'
import '../../Styles/Rating/Rating.css'
import RatingList from './RatingList'
import Paginate from '../Utility/Paginate'
export default function RatingContainer() {
  return (
    <div className='RatingContainer'>
        <div className='container rate'>
            <div className='ratingDesc'>
                <h3 className='ratingTitle'>Reviews</h3>
                <span className='ratingNum'>4.3 <i className="fa-solid fa-star"></i> </span>
                <p className='ratingAllRate'>(<span> 189</span> Reviews )</p>
            </div>
            <RatingPost />
            <RatingList />
            <RatingList />
            <RatingList />
            <RatingList />
        </div>
        <Paginate/>

    </div>
  )
}
