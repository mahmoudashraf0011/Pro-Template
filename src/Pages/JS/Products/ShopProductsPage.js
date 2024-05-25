import React from 'react'
import ResultCount from '../../../Components/JS/Utility/ResultCount'
import SiderFilter from '../../../Components/JS/Utility/SiderFilter'
import b1 from '../../../images/other/item.png'
import '../../Styles/ShopProductsPage.css'
import Paginate from '../../../Components/JS/Utility/Paginate'
import GeneralCard from '../../../Components/JS/Card/GeneralCard'
import CategorySearch from '../../../Components/JS/Catagory/CategorySearch'

export default function ShopProductsPage() {
  return (
    <div style={{minHeight:"700px"}}>
      <CategorySearch />
      <ResultCount result="400"/>
      <div className='container'>
        <div className='shopitems'>
            <div className='shopitems_filter'>
                <SiderFilter />
            </div>
            <div className='shopitems_cards'>
                <div className='best_items'>
                    <GeneralCard imgSrc={b1} title="Amet augue justo" price="122" rate="4.5"/>
                    <GeneralCard imgSrc={b1} title="Amet augue justo" price="122" rate="4.5"/>
                    <GeneralCard imgSrc={b1} title="Amet augue justo" price="122" rate="4.5"/>
                    <GeneralCard imgSrc={b1} title="Amet augue justo" price="122" rate="4.5"/>
                </div>
            </div>
        </div>
      </div>
      <Paginate />

    </div>
  )
}
