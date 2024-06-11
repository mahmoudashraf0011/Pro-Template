import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { json } from 'react-router-dom';

export default function UserProfileHook() {
  const dispatch=useDispatch();
let user=[];
try {
    if(localStorage.getItem("user")){
         user=JSON.parse(localStorage.getItem("user"));
         
    }
} catch (error) {
    
}
  
return [user]
}
