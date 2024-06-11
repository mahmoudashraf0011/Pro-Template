import React from 'react'
import CategorySearch from '../../../Components/JS/Catagory/CategorySearch'
import ProductDetailsComtainer from '../../../Components/JS/Card/ProductDetailsComtainer'
import RatingContainer from '../../../Components/JS/Rating/RatingContainer'
import CardContainer from '../../../Components/JS/Card/CardContainer'
import ProductDetailsHook from '../../../LogicHooks/Products/ProductDetailsHook'
import { useParams } from 'react-router-dom'
export default function ProductDetailsPage({products}) {
  const {id}=useParams();

  const [item , imgs,cat,brand,likes]   =ProductDetailsHook(id);

   // console.log(item.reviews[0].rating);
   // console.log(item.reviews[0].review);
    //console.log(item.reviews[0].user.name);


  return (
    <div style={{marginBottom:"80px"}}>
   
     <ProductDetailsComtainer />
     <RatingContainer  rateVal={item.ratingsAverage} rateCount={item.ratingsQuantity} reviews={item.reviews}/>
     <CardContainer title="Recommended Products" products={likes} q="true"/>
    </div>
  )
}
