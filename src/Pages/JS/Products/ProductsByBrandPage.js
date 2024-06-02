import React from 'react'
import CategorySearch from '../../../Components/JS/Catagory/CategorySearch'
import Paginate from '../../../Components/JS/Utility/Paginate'
import '../../Styles/ProductsByBrandPage.css'
import GeneralCard from '../../../Components/JS/Card/GeneralCard'
import { useParams } from 'react-router-dom'
import Loding from '../../../Components/JS/Utility/Loading'
import ProductsByBrandHook from '../../../LogicHooks/Products/ProductsByBrandHook'
export default function ProductsByBrandPage() {
  const {id}=useParams();
  
const  [items,pagintate,brand,onPress]=ProductsByBrandHook(id);
  return (
    <div className='ProductsByBrandPage' >
      <CategorySearch />
      <h2 className='ProductsByBrandHeader' style={{textTransform:"uppercase",fontWeight:"bold"}}>{brand}</h2>
      <div className='container'>
                <div className='best_items special-items'>
                    {
                      items?items.map((product,i)=>{
                        return <GeneralCard key={i} id={product._id}imgSrc={product.imageCover} title={product.title} price={product.price} rate={product.ratingsQuantity}/>
                      }):<Loding/>
                    }

                </div>
            <Paginate pageCount={pagintate} onPress={onPress}/>  
      </div>
 

    </div>
  )
}
