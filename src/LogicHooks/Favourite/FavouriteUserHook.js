import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllProductsAction } from '../../redux/actions/Product/ProductAction';

export default function FavouriteUserHook(items) {
    const dispatch=useDispatch();

    useEffect(()=>{
      dispatch(getAllProductsAction());
    },[])
  
    const products=useSelector(state=> state.products.allProduct);
  let prods=[]
  try{

        if(products.data){
            prods= products.data;


        }else{
        prods=[]
        }
    }catch(e){}
    
    let favs=[]
    try {
        if(prods){
            prods.map((p)=>{
      
            items.filter(item=>
            {
             if(p._id==item._id){
     
                 favs.push(p);
             }
            }
             
            )
         })
     
           }  
     
        
    } catch (error) {}


     
    

  return [favs]
}
