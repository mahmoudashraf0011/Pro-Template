import React from 'react'
import '../../Styles/Utility/SiderFilter.css'
import SideFilterHook from '../../../LogicHooks/Search/SideFilterHook'

export default function SiderFilter() {
  const [cate,brand,handelChooseCate,handelChooseBrand,handlePriceFrom,handlePriceTo]=SideFilterHook();
  let pf,pt;
  if(localStorage.getItem("priceFrom")){
    pf=localStorage.getItem("priceFrom")
  }else{
    pf=''
  }

  if(localStorage.getItem("priceTo")){
    pt=localStorage.getItem("priceTo")
  }else{
    pt=''
  }
  return (
    <form className='siderFilter'>
      <div className='siderFilter_category subform'>
        <h3 className='sliderFilter_title'>Category</h3>
        <div className='siderFilter_category_elements'>
          <div className='siderFilter_element'>
              <input type="checkbox" id="allcata" name="all" value="0" onClick={handelChooseCate} />
              <label for="allcata"> all</label>
          </div>
          {
            cate?cate.map((item)=>{
              return(
                <div className='siderFilter_element' key={item._id}>
                    <input type="checkbox" id={item._id} name={item.name} value={item._id} onClick={handelChooseCate}/>
                    <label for={item._id}> {item.name}</label>
                </div>
              )
            }):null
          }
        </div>
     

      </div>
      <div className='siderFilter_brand subform'>
        <h3 className='sliderFilter_title'>Brand</h3>
        <div className='siderFilter_brand_elements'>
            <div className='siderFilter_element'>
                    <input type="checkbox" id="allbrand" name="all" value="0" onClick={handelChooseBrand} selected/>
                    <label for="allbrand"> all</label>
            </div>
            {
            brand?brand.map((item)=>{
              return(
                <div className='siderFilter_element' key={item._id}>
                    <input type="checkbox" id={item._id} name={item.name} value={item._id} onClick={handelChooseBrand}/>
                    <label for={item._id}> {item.name}</label>
                </div>
              )
            }):null
          }
             </div>
             <div className='siderFilter_price subform last'>
              <h3 className='sliderFilter_title'>Price</h3>
              <div className='siderFilter_element price price'>
                  <label for="Fromprice"> From:</label>
                  <input type="number" id="Fromprice" style={{outline:"unset",cursor:"auto"}} onChange={handlePriceFrom} value={pf}/>         
              </div>
              <div className='siderFilter_element price' >
                  <label for="toPrice"> To:</label>
                  <input type="number" id="toPrice"  style={{outline:"unset",cursor:"auto"}} onChange={handlePriceTo} value={pt}/>           
              </div>
        </div>
       
      </div>
    </form>
  )
}
