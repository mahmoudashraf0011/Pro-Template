import React from 'react'
import CategorySearch from '../../../Components/JS/Catagory/CategorySearch'
import Paginate from '../../../Components/JS/Utility/Paginate'
import '../../Styles/ProductsByBrandPage.css'
import GeneralCard from '../../../Components/JS/Card/GeneralCard'
import { useParams } from 'react-router-dom'
import Loding from '../../../Components/JS/Utility/Loading'
import ProductsByBrandHook from '../../../LogicHooks/Products/ProductsByBrandHook'
import AllFavHook from '../../../LogicHooks/Favourite/AllFavHook'
export default function ProductsByBrandPage() {
  const {id}=useParams();
  
const  [items,pagintate,brand,onPress]=ProductsByBrandHook(id);
const [favitems] =AllFavHook();


  return (
    <div className='ProductsByBrandPage' >
      <CategorySearch />
      <h2 className='ProductsByBrandHeader' style={{textTransform:"uppercase",fontWeight:"bold"}}>{brand}</h2>
      <div className='container'>
                <div className='best_items special-items'>
                    {
                      items?items.map((product,i)=>{
                        return <GeneralCard product={product} favitems={favitems} key={i} id={product._id} imgSrc={product.imageCover} title={product.title} price={product.price} rate={product.ratingsAverage?product.ratingsAverage:0}/>
                      }):<Loding/>
                    }

                </div>
            <Paginate pageCount={pagintate} onPress={onPress}/>  
      </div>
 

    </div>
  )
}
