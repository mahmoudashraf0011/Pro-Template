import React from 'react'
import CategorySearch from '../../../Components/JS/Catagory/CategorySearch'
import ProductDetailsComtainer from '../../../Components/JS/Card/ProductDetailsComtainer'
import RatingContainer from '../../../Components/JS/Rating/RatingContainer'
import CardContainer from '../../../Components/JS/Card/CardContainer'
export default function ProductDetailsPage() {
  return (
    <div>
     <CategorySearch /> 
     <ProductDetailsComtainer />
     <RatingContainer />
     <CardContainer title="Recommended Products"/>
    </div>
  )
}
