import React from 'react'
import CategorySearch from '../../../Components/JS/Catagory/CategorySearch'
import Paginate from '../../../Components/JS/Utility/Paginate'
import '../../Styles/ProductsByCategoryPage.css'
import GeneralCard from '../../../Components/JS/Card/GeneralCard'
import { useParams } from 'react-router-dom'
import Loding from '../../../Components/JS/Utility/Loading'
import AllFavHook from '../../../LogicHooks/Favourite/AllFavHook'
import ProductsBySubCategoryHook from '../../../LogicHooks/Products/ProductsBySubCategoryHook'
export default function ProductsBySubCategoryPage() {
  const {id}=useParams();
const  [items,pagintate,subcate,onPress]=ProductsBySubCategoryHook(id);
const [favitems] =AllFavHook();

  return (
    <div className='ProductsByCategoryPage' >
      <CategorySearch />
      <h2 className='ProductsByCategoryHeader' style={{textTransform:"capitalize",fontWeight:"bold"}}>{subcate}</h2>
      <div className='container'>
                <div className='best_items special-items'>
                    {
                      items?items.map((product,i)=>{
                        return <GeneralCard favitems={favitems} key={i} id={product._id}imgSrc={product.imageCover} title={product.title} price={product.price} rate={product.ratingsAverage?product.ratingsAverage:0} product={product}/>
                      }):<Loding/>
                    }

                </div>
            <Paginate pageCount={pagintate} onPress={onPress}/>  
      </div>
 

    </div>
  )
}
