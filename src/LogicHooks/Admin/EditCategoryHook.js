import React, { useEffect ,useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import av from './../../images/other/avatar.png'
import Notify from '../../Components/JS/Utility/Notify';
import { getSpecificCategoryAction, updateCategoryAction } from '../../redux/actions/Category/allCategoryAction';
import { useNavigate } from 'react-router-dom';

export default function EditCategoryHook(id) {
  const [name,setName]=useState("");
  const [img,setImg]=useState(av);
  let [selectedFile,setSelectedFile]=useState(null);
  let [imgFile,setImgFile]=useState(null);
  const [load,setLoad]=useState(true);
  const [press,setPress]=useState(false);
  const navigate=useNavigate();

  const dispatch=useDispatch();



  useEffect(()=>{
   const run=async()=>{
   await dispatch(getSpecificCategoryAction(id))
   }
run()
  },[])
  const res=useSelector(state=> state.allCategory.updateCategory);
  const category=useSelector(state=> state.allCategory.specificCategory);

  let item=[]
  try{

    if(category.data){
      item=category.data

    }else{
      item=[]
    }
  }catch(e){
 
  }
   //Reload Previous data
  useEffect(()=>{
   if(item){
     setName(item.name)
     if(item.image){
      setSelectedFile(item.image)
        console.log(item.image.length );
      if(item.image.length > 100){
        setImg(item.image.slice(33))
      }else{
        setImg(item.image)
      }


     }
 
  
 }  

},[item])

 const handleIMGChange =(e)=>{

   if(e.target.files){  
     setImg( URL.createObjectURL(e.target.files[0]));
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

     convertURLtoFile(selectedFile.length > 100 ?selectedFile.slice(33):selectedFile).then((val) =>selectedFile = val)

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
     await dispatch(updateCategoryAction(id,formData))
     setLoad(false)
   }, 500)

 }

 useEffect(()=>{
   if(load ===false){
       if(res){
           if(res.status === 200){
               Notify("Category is Updated successfully!","success")
               setTimeout(() => {
                navigate("/admin/allcategories")
               }, 2000)
             }else{
               Notify("Failed to updated Category!","error")
   
             }
         }
   
   
          setLoad(true)
       }
 },[load])
  return [name,img,press,load,handleIMGChange,handleNameChange,handleSubmit]
}
