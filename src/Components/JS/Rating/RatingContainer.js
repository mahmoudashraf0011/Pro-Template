import React, { useEffect, useState } from 'react'
import RatingPost from './RatingPost'
import '../../Styles/Rating/Rating.css'
import RatingList from './RatingList'
import Paginate from '../Utility/Paginate'
import { useParams } from 'react-router-dom'
import ViewAllReviewsForProductHook from '../../../LogicHooks/Review/ViewAllReviewsForProductHook'
import Loding from '../Utility/Loading'
import { ToastContainer } from 'react-toastify'




export default function RatingContainer({rateVal,rateCount,reviews}) {
 const {id}=useParams();
 const [items,pagintate,onPress]=ViewAllReviewsForProductHook(id);

  return (
    <div className='RatingContainer'>
        <div className='container rate'>
            <div className='ratingDesc'>
                <h3 className='ratingTitle'>Reviews</h3>
                <span className='ratingNum'>{rateVal?rateVal:0}<i className="fa-solid fa-star"></i> </span>
                <p className='ratingAllRate'>(<span> {rateCount ?rateCount:0}</span> Reviews )</p>
            </div>
            <RatingPost />
            {
              items?(
                items.length > 0?(
                  items.map((item)=>{
                    return <RatingList item={item} key={item._id} items={items}/>
                  })
                ):<h2 className='noRates'>There are no ratings for this product</h2>

              ) : <Loding />
            }

        </div>
        {pagintate > 1 ?<Paginate pageCount={pagintate} onPress={onPress}/>:""}
        <ToastContainer />
    </div>
  )
}
