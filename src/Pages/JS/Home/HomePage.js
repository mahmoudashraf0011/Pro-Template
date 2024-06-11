import React, { useEffect } from 'react'
import Slider from '../../../Components/JS/Home/Slider'
import Discount from '../../../Components/JS/Home/Discount'
import CardContainer from '../../../Components/JS/Card/CardContainer'
import BrandContainer from '../../../Components/JS/Brand/BrandContainer'
import HomeCategory from '../../../Components/JS/Home/HomeCategory'
import HomeProductsHook from '../../../LogicHooks/Products/HomeProductsHook'
import Features from '../../../Components/JS/Home/Features'
import Blog from '../../../Components/JS/Home/Blog'
import About from '../../../Components/JS/Home/About'
import Contact from '../../../Components/JS/Home/Contact'
import '../../Styles/Home.css'
export default function HomePage() {
  const [bestProducts,latestProducts,ratedProducts]=HomeProductsHook();
  useEffect(()=>{
    const ele=document.querySelector('.up');
    ele.onclick=(e)=>{
      window.scrollTo(0,0);
    }

  })
  window.onscroll=()=>{
    const ele=document.querySelector('.up');
    try {
      if(window.pageYOffset >= 500){
        ele.style.display="block"
      }else{
  
        ele.style.display="none"
      }
    } catch (error) {
      
    }

  }


  return (
    <div className='homePage'>
      <Slider />
      <HomeCategory title="catagories" btnTitle="More" pathing="/allcategory"/>
      <CardContainer title="best seller" btnTitle="more" pathing="/allproducts" products={bestProducts} id="best"/>
      <Discount />
      <CardContainer title="latest fashion" btnTitle="more"  pathing="/allproducts" products={latestProducts} id="latest"/>
      <BrandContainer title="famous brand" btnTitle="more"  pathing="/allbrand"/>
      <CardContainer title="Highest rated" btnTitle="more"  pathing="/allproducts" products={ratedProducts} id="rated"/>
      <Features />
      <Blog />
      <About />
      <Contact />
      <button className='up'>GO UP</button>
    </div>
  )
}
