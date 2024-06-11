import React from 'react'
import CategorySearch from '../../../Components/JS/Catagory/CategorySearch'
import Paginate from '../../../Components/JS/Utility/Paginate'
import '../../Styles/ProductsByCategoryPage.css'
import GeneralCard from '../../../Components/JS/Card/GeneralCard'
import ProductsByCategoryHook from '../../../LogicHooks/Products/ProductsByCategoryHook'
import { useParams } from 'react-router-dom'
import Loding from '../../../Components/JS/Utility/Loading'
import AllFavHook from '../../../LogicHooks/Favourite/AllFavHook'
export default function ProductsByCategoryPage() {
  const {id}=useParams();
  
const  [items,pagintate,cate,onPress]=ProductsByCategoryHook(id);
const [favitems] =AllFavHook();

  return (
    <div className='ProductsByCategoryPage' >
      <CategorySearch />
      <h2 className='ProductsByCategoryHeader' style={{textTransform:"capitalize",fontWeight:"bold"}}>{cate}</h2>
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
