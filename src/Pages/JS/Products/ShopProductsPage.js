import React from 'react'
import ResultCount from '../../../Components/JS/Utility/ResultCount'
import SiderFilter from '../../../Components/JS/Utility/SiderFilter'
import b1 from '../../../images/other/item.png'
import '../../Styles/ShopProductsPage.css'
import Paginate from '../../../Components/JS/Utility/Paginate'
import GeneralCard from '../../../Components/JS/Card/GeneralCard'
import CategorySearch from '../../../Components/JS/Catagory/CategorySearch'
import ShopProductHook from '../../../LogicHooks/Products/ShopProductHook'
import Loding from '../../../Components/JS/Utility/Loading'
import { useDispatch } from 'react-redux'
import { getProductsPagesAction } from '../../../redux/actions/Product/ProductAction'
export default function ShopProductsPage() {

  const [items,pagintate,length,onPress,getData] = ShopProductHook();



  return (
    <div className='shopPage'>
      <CategorySearch />
      <ResultCount result={length}/>
      <div className='container'>
        <div className='shopitems'>
            <div className='shopitems_filter'>
                <SiderFilter />
            </div>
            <div className='shopitems_cards'>
                <div className='best_items special-items'>
                    {
                      items?items.map((product,i)=>{
                        return <GeneralCard key={i} id={product._id}imgSrc={product.imageCover} title={product.title} price={product.price} rate={product.ratingsQuantity}/>
                      }):<Loding/>
                    }
                </div>
            </div>
        </div>
      </div>
      <Paginate pageCount={pagintate} onPress={onPress}/>

    </div>
  )
}
