import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { allCategoryAction } from '../../redux/actions/Category/allCategoryAction';
import { allBrandAction } from '../../redux/actions/Brand/allBrandAction';
import { getAllSubCAtegoryForCategoryAction } from '../../redux/actions/Subcategory/subcategoryAction';
import { addProductAction, getSpecificProductAction, updateProductAction } from '../../redux/actions/Product/ProductAction';
import Notify from '../../Components/JS/Utility/Notify';
import baseURL from '../../API/baseURL';;

export default function EditProductHook(id) {
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
  const res=useSelector(state=> state.products.updateProduct);
  const product=useSelector(state=> state.products.specificProduct);

  // Get allCategories && allBrands
  const dispatch=useDispatch();
  useEffect(()=>{
   const  run=async ()=>{
        await dispatch(getSpecificProductAction(id))
        await dispatch(allCategoryAction());
        await dispatch(allBrandAction());
    }
    run();

  },[])

  useEffect(()=>{

    if(product.data){
            setImages(productItem.images)
            setName(productItem.title)
            setDesc(productItem.description)
            setPriceBefore(productItem.price)
            setQty(productItem.quantity)
            setColors(productItem.availableColors)
            setCatID(productItem.category)
            setBrandID(productItem.brand)
}
  

  },[product.data])


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

  //choose subcatgories for main category
  const handleChangeMainCat=async (e)=>{
     setCatID(e.target.value)

  }

    useEffect(() => {
        if (catID != 0) {
            const run = async () => {
                await dispatch(getAllSubCAtegoryForCategoryAction(catID))
            }
            run();
        }
    }, [catID])
 

  useEffect(()=>{
        if(subCate){
           setOptions(subCate.data)
        }
     
    

  },[subCate])

  const handleChangeBrand =(e)=>{
 
          setBrandID(e.target.value)
   
  }



  
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

  //convert images BASE64 to file
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


//convert url to file
    const convertURLtoFile = async (url) => {
    
        const response = await fetch(url, { mode: "cors" });
        const data = await response.blob();
        const ext = url.split(".").pop();
        const filename = url.split("/").pop();
        const metadata = { type: `image/${ext}` };
  
        return new File([data], Math.random(), metadata);
        
    };


  let productItem=[];

  try{
    if(product.data){
        productItem=product.data
    
      }else{
        productItem = []
      }
  }catch(e){
     console.log(e)
  }

  //Return Previous Data

  const handleSubmit= async (e)=>{
      e.preventDefault();
    //   if(name=="" || images ==[] || desc == "" || priceBefore == "" || priceAfter == "" || qty =="0" || catID=="0" || brandID=="" || priceAfter > priceBefore ){
    //       Notify("Please Complete Data!","warn");
    //       return;
    //   }


    let imageCover;
    if (images[0].length <= 1000) {
        convertURLtoFile(images[0]).then((val) =>imageCover = val)
    } else {
        imageCover = dataURLtoFile(images[0], Math.random() + ".png")
    }

    let imagesArr = []
    //convert array of base 64 image to file 
    Array.from(Array(Object.keys(images).length).keys()).map(
        (item, index) => {
            if (images[index].length <= 1000) {
                console.log("url")

                convertURLtoFile(images[index]).then(val => imagesArr.push(val))
            }
            else {
          
                imagesArr.push(dataURLtoFile(images[index], Math.random() + ".png"))
            

            }
        })

      const formData=new FormData();

        

      formData.append("title",name);
      formData.append("description",desc);
      formData.append("quantity",qty);
      formData.append("price",priceBefore);
      formData.append("category",catID);
      formData.append("brand",brandID);

    
      setTimeout(() => {
        formData.append("imageCover",imageCover);
        imagesArr.map((img)=>formData.append("images",img) )
      }, 1000)
      

      colors.map((color)=>formData.append("availableColors",color) )
      selectedSubcat.map((cat)=>formData.append("subcategory",cat._id) )
      setLoad(true);
      setPress(true)
      setTimeout(async  () => {
        await dispatch(updateProductAction(id,formData))
        setLoad(false)
      }, 1000)
      



  }
  useEffect(()=>{
      if(load==false){
          setPress(false)
          if(res){
            if(res.status === 200){
                Notify("Product is Updated successfully!","success")
               }else{
                Notify("Failed to updated product!","error")
        
               }
          }


          setTimeout(() => {
              setLoad(true)
          }, 1000);

      }
  
    },[load])
return [images,options,name,desc,priceBefore,priceAfter,qty,selectedSubcat,colors,showColor,category,brand,catID,brandID,handelChangeDesc,handelChangeName,handelChangePriceAfter,handelChangePriceBefore,handelChangeQty,handleChangeBrand,handleChangeMainCat,handleChooseColor,handleSubmit , onRemove,onSelect,deleteColor,setImages,setShowColor]
}
