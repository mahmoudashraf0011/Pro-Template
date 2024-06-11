import React from 'react'
import GeneralCard from '../../Card/GeneralCard'
import '../../../Styles/User/UserFavourite.css'
import b1 from './../../../../images/other/item.png'
import CardContainer from '../../Card/CardContainer'
import AllFavHook from '../../../../LogicHooks/Favourite/AllFavHook'
import Loding from '../../Utility/Loading'
import FavouriteUserHook from '../../../../LogicHooks/Favourite/FavouriteUserHook'

export default function UserFavourite() {
const [favitems,items] =AllFavHook();
const [favs]=FavouriteUserHook(items);
console.log(items);


  return (
    <div className='UserFavourite'>
      <div className='container'>
        <div className='UserFavourite_items'>
        {
           items?items.length > 0?(
            items.map((product,i)=>{
              return <GeneralCard favitems={favitems}  id={product._id} imgSrc={"http://127.0.0.1:8000/products/"+product.imageCover} title={product.title} price={product.price} rate={product.ratingsAverage?product.ratingsAverage:0} />
            })
           ):<h2 className='noResult' style={{width:"600px"}}>There are no Favourites Products</h2>:""

            }
        </div>
      </div>
    </div>
  )
}
