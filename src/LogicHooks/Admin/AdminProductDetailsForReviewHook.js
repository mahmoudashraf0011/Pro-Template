import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getSpecificProductAction } from '../../redux/actions/Product/ProductAction';
import { getSpecificCategoryAction } from '../../redux/actions/Category/allCategoryAction';
import {getSpecificBrandAction} from '../../redux/actions/Brand/allBrandAction'
import Notify from '../../Components/JS/Utility/Notify';
import { deleteReviewForProdcutAction } from '../../redux/actions/Review/ReviewAction';
export default function AdminProductDetailsForReviewHook(prodID,revID) {
    const dispatch=useDispatch();
    const [load,setLoad]=useState(true);
    const [loadP,setLoadP]=useState(true);
    const [loadC,setLoadC]=useState(true);
    const [loadD,setLoadD]=useState(true);
    const [product,setProduct]=useState([]);
    const [cate,setCate]=useState("");
    const [brand,setBrand]=useState("");
    const [showDelete, setShowDelete] = useState(false);
    const handleCloseDelete = () => setShowDelete(false);
    const handleShowDelete = () => setShowDelete(true);
    const res=useSelector(state=> state.products.specificProduct);
    const categoryRes=useSelector(state=> state.allCategory.specificCategory);
  const brandRes=useSelector(state=> state.allBrand.specificBrand);
    useEffect(()=>{
     const  run=async ()=>{
        setLoad(true)
        await dispatch(getSpecificProductAction(prodID))

        setLoad(false)

      }
      run();
  
    },[prodID])




    useEffect(()=>{
        if(load==false){
            if(res){
                setProduct(res.data)
              }
        }

    },[load])

    useEffect(()=>{
        const  run=async ()=>{
        
            if(product){
                setLoadP(true)
                await dispatch(getSpecificCategoryAction(product.category))
                setLoadP(false)

            }
   
         }
         run();
     
       },[product.category])
       
    useEffect(()=>{
        const  run=async ()=>{
        
            if(product){
                setLoadC(true)
                await dispatch(getSpecificBrandAction(product.brand))
                setLoadC(false)

            }
   
         }
         run();
     
       },[product.brand])

       useEffect(()=>{
        if(loadP==false){
            if(categoryRes.data){
               setCate(categoryRes.data.name)
              }
               setLoadP(true) 
        }

    },[loadP])

    useEffect(()=>{
        if(loadC==false){
            if(brandRes){
                setBrand(brandRes.data.name)
               }  
               setLoadC(true)
        }

    },[loadC])

const handelDelete=async()=>{
    setLoadD(true)
    await dispatch(deleteReviewForProdcutAction(revID));      
    setLoadD(false)
    handleCloseDelete();
    
}

const resDlete=useSelector(state=> state.reviewReducer.deleteReviewForProduct);

useEffect(()=>{
  if(loadD==false){
    if(resDlete){
        console.log(resDlete);
        if(resDlete.status === 204){           
            Notify("Review is Deleted successfully!","success")
            setTimeout(() => {
            window.location.reload();
           }, 3000);
        }else{
            Notify("There are problem!","error")

        }
    }        
    setLoadD(true)
 
}
},[loadD])

    return [product,cate,brand,showDelete,handelDelete,,handleCloseDelete,handleShowDelete]
}
