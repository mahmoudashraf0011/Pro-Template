import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { adminGetAllUsersAction } from '../../redux/actions/AdminUseres/AdminUseresAction';



 export default function ViewAllusersHook() {
    const dispatch=useDispatch();

    useEffect( ()=>{
        const run=async()=>{
           await dispatch(adminGetAllUsersAction(6,1));
        }

        run();
    },[])
  
    const users=useSelector(state=> state.adminUseresReducer.adminGetAllUsers);
    let items=[]
    try{
   
      if(users.data){
         items= users.data;

  
      }else{
        items=[]
      }
    }catch(e){}
  
  let pagintate=[]
try{
  if(users.data){
    pagintate= users.paginationResult.numberOfPages; 

    
      }else{
        pagintate = []
      }
  }catch(e){}

    
    const onPress=async (page)=>{
      await dispatch(adminGetAllUsersAction(6,page))
    }

    return [items,pagintate,onPress]
 }


