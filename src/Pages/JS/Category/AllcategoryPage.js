import React from 'react'

import Paginate from '../../../Components/JS/Utility/Paginate'
import AllcategoryContainer from '../../../Components/JS/Catagory/AllcategoryContainer'
import AllCatrgoryPageHook from '../../../LogicHooks/Categories/AllCatrgoryPageHook'



export default function AllcategoryPage() {

  const [category,load,pageCount,getPage]=AllCatrgoryPageHook();
  return (
    <div>
      <AllcategoryContainer category={category} load={load}/>
      <Paginate pageCount={pageCount} onPress={getPage}/>

    </div>
  )
}
