import React from 'react'
import Slider from '../../../Components/JS/Home/Slider'
import Discount from '../../../Components/JS/Home/Discount'
import CategoryContainer from '../../../Components/JS/Catagory/CategoryContainer'
import CardContainer from '../../../Components/JS/Card/CardContainer'
import BrandContainer from '../../../Components/JS/Brand/BrandContainer'

export default function HomePage() {
  return (
    <div>
      <Slider />
      <CategoryContainer title="catagories" btnTitle="More" pathing="/allcategory"/>
      <CardContainer title="best seller" btnTitle="more" pathing="/allproducts"/>
      <Discount />
      <CardContainer title="latest fashion" btnTitle="more"  pathing="/allproducts"/>
      <BrandContainer title="famous brand" btnTitle="more"  pathing="/allbrand"/>

    </div>
  )
}
