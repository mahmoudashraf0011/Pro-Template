import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { createFavAction, deleteFavAction } from '../../redux/actions/Favourite/FavouriteAction';
import Notify from '../../Components/JS/Utility/Notify';

export default function ModifyFavHook(id,favitems) {
    const dispatch=useDispatch();
    let off= "fa-regular fa-heart"
    let on= "fa-solid fa-heart"
    const fav=favitems?favitems.some((item)=>item==id):""
    const [icon,setIcon]=useState(off);
    const [isFav,setIsFav]=useState(fav);
    const [loadAdd,setLoadAdd]=useState(true);
    const [loadDelete,setLoadDelete]=useState(true);

    useEffect(()=>{
        if(favitems){
            setIsFav(favitems.some((item)=>item===id))

        }
    },[favitems])

    useEffect(()=>{
        if(favitems){
            if(isFav){
                setIcon(on)
            }else{
                setIcon(off)
    
            }
        }
    },[isFav])

    const handleFav=()=>{
    if(isFav){
        deleteFav();
    }else{
        addFav();
    }

    }




    const addFav=async()=>{
        setIsFav(true)
        setIcon(on)
        setLoadAdd(true)
        await dispatch (createFavAction({
            productId: id
        }))
        setLoadAdd(false)
    }
    const resAdd=useSelector(state=> state.favReducer.addFav);

    const deleteFav=async()=>{
        setIsFav(false)
        setIcon(off)
        setLoadDelete(true)
        await dispatch (deleteFavAction(id))
        setLoadDelete(false)
    }
    const resDelet=useSelector(state=> state.favReducer.deleteFav);

    useEffect(()=>{
        if(loadAdd==false){
            if(resAdd){
               console.log("ad0",resAdd);                
            if(resAdd.status === 200){
                Notify("The product is added to Wishlist successfully!","success")
                }else{
                Notify("You are no login to do this action!","error")
                setIsFav(false)
                setTimeout(() => {
                    window.location.reload();
                   }, 4000);   
                }
              
            }
        }
    },[loadAdd])

    useEffect(()=>{
        if(loadDelete==false){
          if(resDelet){
              console.log("de",resDelet);
              if(resDelet.status === 200){           
                  Notify("The product is Removed from Wishlist successfully!","warn")
                  setTimeout(() => {
                  window.location.reload();
                 }, 2000);
              }else{
                  Notify("There are problem!","error")
                setIsFav(false)
  
              }
          }        
          setLoadDelete(true)
       
      }
      },[loadDelete])

    return [icon,handleFav]
}
