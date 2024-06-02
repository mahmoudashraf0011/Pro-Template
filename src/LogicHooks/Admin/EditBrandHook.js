import React, { useEffect ,useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import av from './../../images/other/avatar.png'
import {addBrandAction, getSpecificBrandAction, updateBrandAction} from '../../redux/actions/Brand/allBrandAction';
import Notify from '../../Components/JS/Utility/Notify';

export default function EditBrandHook(id) {
  const [name,setName]=useState("");
  const [img,setImg]=useState(av);
  let [selectedFile,setSelectedFile]=useState(null);
  const [load,setLoad]=useState(true);
  const [press,setPress]=useState(false);
  const dispatch=useDispatch();
  const res=useSelector(state=> state.allBrand.updateBrand);
  const brand=useSelector(state=> state.allBrand.specificBrand);
  useEffect(()=>{
    const run=async()=>{
    await dispatch(getSpecificBrandAction(id))
    }
 run()
   },[])

   let item=[]
   try{
 
     if(brand.data){
       item=brand.data
 
     }else{
       item=[]
     }
   }catch(e){
     console.log(e)
   }
    //Reload Previous data
   useEffect(()=>{
    if(brand.data){
      setName(item.name)
     setSelectedFile(item.image)
     setImg(item.image)
   
  }  
},[brand.data])

  const handleIMGChange =(e)=>{
    if(e.target.files){  
      setImg(URL.createObjectURL(e.target.files[0]));
      setSelectedFile(e.target.files[0])
    }

  }
  const handleNameChange =(e)=>{
    e.persist();
    setName(e.target.value)
  }

  //convert url to file
const convertURLtoFile = async (url) => {
    
    const response = await fetch(url, { mode: "cors" });
    const data = await response.blob();
    const ext = url.split(".").pop();
    const filename = url.split("/").pop();
    const metadata = { type: `image/${ext}` };
  
    return new File([data], Math.random(), metadata);
    
  };

  const handleSubmit =async (e)=>{
    e.preventDefault();
    if(name==="" || selectedFile ===null){
      Notify("Please Complete Data!","warn");
      return;
    }
    if(typeof selectedFile === "string"){
      convertURLtoFile(selectedFile).then((val) =>selectedFile = val)

    }
    const formData=new FormData(); 
    setTimeout(() => {
      formData.append("name",name);
      formData.append("image",selectedFile);
    }, 500);

    if(!navigator.onLine){
      Notify("There is an error connecting to the Internet!","warn");
      return;
    } 
    setTimeout(async() => {  
    setLoad(true);
    setPress(true)   
      await dispatch(updateBrandAction(id,formData))
      setLoad(false)
    }, 500)

  }

  useEffect(()=>{
    if(load ===false){
        if(res){
            if(res.status === 200){
                Notify("Brand is Updated successfully!","success")
              }else{
                Notify("Failed to updated Brand!","error")
    
              }
          }
    
    
           setLoad(true)
        }
  },[load])
  return [name,img,press,load,handleIMGChange,handleNameChange,handleSubmit]
}
