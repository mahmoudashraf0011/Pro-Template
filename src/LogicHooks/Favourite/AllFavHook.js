import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllFavAction } from '../../redux/actions/Favourite/FavouriteAction';

export default function AllFavHook() {
    const dispatch=useDispatch();
    const [load,setLoad]=useState(true);
    const res=useSelector(state=> state.favReducer.allFav);
    const [favProd, setFavProd] = useState([])
    const run=async ()=>{
        setLoad(true)
        await dispatch(getAllFavAction())
        setLoad(false)

    }
    useEffect(()=>{
        run();
       
    },[])

let favitems=[],items=[];
try {
    if(res.data){
  
        favitems=res.data.map(item => item._id);
        items=res.data
    
        
    }

} catch (error) {
    
}



return [favitems,items]
}
