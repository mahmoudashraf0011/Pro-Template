import React from 'react'
import '../../Styles/SiderFilter.css'

export default function SiderFilter() {
  return (
    <form className='siderFilter'>
      <div className='siderFilter_category subform'>
        <h3 className='sliderFilter_title'>Category</h3>
        <div className='siderFilter_element'>
            <input type="checkbox" id="allcata" name="all" value="all" />
            <label for="allcata"> all</label>
        </div>
        <div className='siderFilter_element'>
            <input type="checkbox" id="appliances" name="appliances" value="appliances" />
            <label for="appliances"> appliances</label>
        </div>
        <div className='siderFilter_element'>
            <input type="checkbox" id="electronics" name="electronics" value="electronics" />
            <label for="electronics">electronics</label>
        </div>
        <div className='siderFilter_element'>
            <input type="checkbox" id="fashion" name="fashion" value="fashion" />
            <label for="fashion">fashion</label>
        </div>
        <div className='siderFilter_element'>
            <input type="checkbox" id="phones" name="phones" value="phones" />
            <label for="phones">phones</label>
        </div>

      </div>
      <div className='siderFilter_brand subform'>
        <h3 className='sliderFilter_title'>Brand</h3>
        <div className='siderFilter_element'>
            <input type="checkbox" id="allbrand" name="all" value="all" />
            <label for="allbrand"> apple</label>
        </div>
        <div className='siderFilter_element'>
            <input type="checkbox" id="apple" name="apple" value="apple" />
            <label for="apple"> apple</label>
        </div>
        <div className='siderFilter_element'>
            <input type="checkbox" id="samsung" name="samsung" value="samsung" />
            <label for="samsung"> samsung</label>
        </div>
      </div>
      <div className='siderFilter_brand subform last'>
            <h3 className='sliderFilter_title'>Price</h3>
            <div className='siderFilter_element price'>
                <label for="Fromprice">From :</label>
                <input type="number" id="Fromprice"  />         
            </div>
            <div className='siderFilter_element'>
                <label for="toPrice"> To : </label>
                <input type="number" id="toPrice"/>           
            </div>
      </div>
    </form>
  )
}
