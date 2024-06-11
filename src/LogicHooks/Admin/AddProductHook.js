import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { allCategoryAction } from '../../redux/actions/Category/allCategoryAction';
import { allBrandAction } from '../../redux/actions/Brand/allBrandAction';
import { getAllSubCAtegoryForCategoryAction } from '../../redux/actions/Subcategory/subcategoryAction';
import { addProductAction } from '../../redux/actions/Product/ProductAction';
import Notify from '../../Components/JS/Utility/Notify';
export default function AddProductHook() {
      // states
      const [images, setImages] = useState([]);
      const [options, setOptions] = useState([]);
      const [name, setName] = useState(""); 
      const [desc, setDesc] = useState(""); 
      const [priceBefore, setPriceBefore] = useState(""); 
      const [priceAfter, setPriceAfter] = useState(""); 
      const [qty, setQty] = useState("");
      const [catID, setCatID] = useState("0");
      const [selectedSubcat, setSelectedSubcat] = useState([]);
      const [brandID, setBrandID] = useState("0");
      const [colors, setColors] = useState([]);
      const [showColor, setShowColor] = useState(false);
      const [load,setLoad]=useState(true);
      const [press,setPress]=useState(false);
  
      //Selectors
      const category=useSelector(state=> state.allCategory.category);
      const brand=useSelector(state=> state.allBrand.brand);
      const subCate=useSelector(state=>state.subCategory.subcategory)
      const res=useSelector(state=> state.products.product);
  
      // Get allCategories && allBrands
      const dispatch=useDispatch();
      useEffect(()=>{
        dispatch(allCategoryAction());
        dispatch(allBrandAction());
    
      },[])
  
  
      const handelChangeName=(e)=>{
          e.persist();
          setName(e.target.value)
      }
      const handelChangeDesc=(e)=>{
          e.persist();
          setDesc(e.target.value)
      }
  
      const handelChangePriceBefore=(e)=>{
          e.persist();
          setPriceBefore(e.target.value)
      }
      const handelChangePriceAfter=(e)=>{
          e.persist();
          setPriceAfter(e.target.value)
      }
      const handelChangeQty=(e)=>{
          e.persist();
          setQty(e.target.value)
      }
  
      const handleChangeMainCat=async (e)=>{
          if(e.target.value != "0"){
              await dispatch(getAllSubCAtegoryForCategoryAction(e.target.value));
          }
          setCatID(e.target.value)
  
      }
      const handleChangeBrand =(e)=>{
     
              setBrandID(e.target.value)
       
      }
  
      useEffect(()=>{
          if(catID != "0"){
              if(subCate.data){
                  setOptions(subCate.data)
              }
           
          }
      
        },[catID])
  
      
      const onSelect = (data) => {
          setSelectedSubcat(data)
      }
      const onRemove = (data) => {
          setSelectedSubcat(data)
  
  
      }
      const handleChooseColor=(colord)=>{
          setShowColor(false)
          if(colord !==""){
              setColors([...colors,colord.hex])
          }
         
      
      }
  
      const deleteColor=(c)=>{
         const newColors=colors.filter((color)=>{
          return color!==c
         })
         setColors(newColors)
      }
  
      //Transfer images to file
      function dataURLtoFile(dataurl, filename) {
  
          var arr = dataurl.split(','),
              mime = arr[0].match(/:(.*?);/)[1],
              bstr = atob(arr[1]),
              n = bstr.length,
              u8arr = new Uint8Array(n);
  
          while (n--) {
              u8arr[n] = bstr.charCodeAt(n);
          }
  
          return new File([u8arr], filename, { type: mime });
      }
  
      
      const handleSubmit= async (e)=>{
          e.preventDefault();
          if(name=="" || images ==[] || desc == "" || priceBefore == "" || priceAfter == "" || qty =="0" || catID=="0" || brandID=="" ){
              Notify("Please Complete Data!","warn");
              return;
          }
          if(priceBefore < priceAfter){
            Notify("Price After Discount must be < Price before Discount","error");
            return;
          }
          if(priceBefore == priceAfter){
            setPriceAfter(0)
          }
          const imageCover=dataURLtoFile(images[0],Math.random()+".png");
          const imagesArr=Array.from(Array(Object.keys(images).length).keys()).map((img,i)=>{
              return dataURLtoFile(images[i],Math.random()+".png")
          })
          const formData=new FormData();
          formData.append("title",name);
          formData.append("description",desc);
          formData.append("quantity",qty);
          formData.append("price",priceBefore);
          if(priceBefore != priceAfter){
            formData.append("priceAfterDiscount",priceAfter);
          }
          formData.append("imageCover",imageCover);
          formData.append("category",catID);
          formData.append("brand",brandID);
          imagesArr.map((img)=>formData.append("images",img) )
          colors.map((color)=>formData.append("availableColors",color) )
          selectedSubcat.map((cat)=>formData.append("subcategory",cat._id) )
          setLoad(true);
          setPress(true)
         await dispatch(addProductAction(formData))
         setLoad(false)
         setTimeout(() => {
            window.location.reload();

         }, 5000);
          
      }
      useEffect(()=>{
          if(load==false){

              setImages([])
              setName("");
              setDesc("")
              setPriceBefore("")
              setPriceAfter("")
              setQty("")
              setCatID("sssssssss")
              setBrandID("0")
              setSelectedSubcat([])
              setColors([])
              setOptions([])
              setPress(false)
              console.log(res.status)
              if(res.status === 201){
                 Notify("product is added successfully!","success")
                 console.log("success")
                 }else{
                  Notify("Failed to add product!","error")
          
                 }
  
              setTimeout(() => {
                  setLoad(true)
              }, 500);

          }
      
        },[load])
  return [images,options,name,desc,priceBefore,priceAfter,qty,selectedSubcat,colors,showColor,category,brand,catID,brandID,handelChangeDesc,handelChangeName,handelChangePriceAfter,handelChangePriceBefore,handelChangeQty,handleChangeBrand,handleChangeMainCat,handleChooseColor,handleSubmit , onRemove,onSelect,deleteColor,setImages,setShowColor]
}
