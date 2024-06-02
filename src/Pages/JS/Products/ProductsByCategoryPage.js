import React from 'react'
import CategorySearch from '../../../Components/JS/Catagory/CategorySearch'
import Paginate from '../../../Components/JS/Utility/Paginate'
import '../../Styles/ProductsByCategoryPage.css'
import GeneralCard from '../../../Components/JS/Card/GeneralCard'
import ProductsByCategoryHook from '../../../LogicHooks/Products/ProductsByCategoryHook'
import { useParams } from 'react-router-dom'
import Loding from '../../../Components/JS/Utility/Loading'
export default function ProductsByCategoryPage() {
  const {id}=useParams();
  
const  [items,pagintate,cate,onPress]=ProductsByCategoryHook(id);
  return (
    <div className='ProductsByCategoryPage' >
      <CategorySearch />
      <h2 className='ProductsByCategoryHeader' style={{textTransform:"capitalize",fontWeight:"bold"}}>{cate}</h2>
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
