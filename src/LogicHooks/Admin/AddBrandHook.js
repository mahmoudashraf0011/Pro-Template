import React, { useEffect ,useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import av from './../../images/other/avatar.png'
import {addBrandAction} from '../../redux/actions/Brand/allBrandAction';
import Notify from '../../Components/JS/Utility/Notify';

export default function AddBrandHook() {
  const [name,setName]=useState("");
  const [img,setImg]=useState(av);
  const [selectedFile,setSelectedFile]=useState(null);
  const [load,setLoad]=useState(true);
  const [press,setPress]=useState(false);
  const dispatch=useDispatch();
  const res=useSelector(state=> state.allBrand.brand);

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
  const handleSubmit =async (e)=>{
    e.preventDefault();
    if(name==="" || selectedFile ===null){
      Notify("Please Complete Data!","warn");
      return;
    }
    const formData=new FormData();
    formData.append("name",name);
    formData.append("image",selectedFile);
    setLoad(true);
    setPress(true)
    if(!navigator.onLine){
      Notify("There is an error connecting to the Internet!","warn");
      return;
    }
    await dispatch(addBrandAction(formData))
    setLoad(false)

  }

  useEffect(()=>{
    if(load ===false){
      setImg(av);
      setName('');
      setSelectedFile(null)
      setTimeout(() => {
        setPress(false)
       
      }, 3000);
      if(res.status === 201){
        Notify("The brand is added successfully!","success")
       }else{
        Notify("Failed to add brand!","error")

       }
       setLoad(true)
    }
  },[load])
  return [name,img,press,load,handleIMGChange,handleNameChange,handleSubmit]
}
