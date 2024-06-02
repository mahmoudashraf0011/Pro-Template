import React from 'react'
import AllbrandContainer from '../../../Components/JS/Brand/AllbrandContainer'
import Paginate from '../../../Components/JS/Utility/Paginate'
import AllBrandPageHook from '../../../LogicHooks/Brands/AllBrandPageHook'
export default function AllbrandPage() {
  const [brand,load,pageCount,getPage]=AllBrandPageHook();
  return (
    <div>
      <AllbrandContainer brand={brand} load={load}/>
      <Paginate pageCount={pageCount} onPress={getPage}/>
    </div>
  )
}
