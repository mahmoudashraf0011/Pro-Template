import React from 'react'
import GeneralCard from '../../Card/GeneralCard'
import '../../../Styles/UserFavourite.css'
import b1 from './../../../../images/other/item.png'
export default function UserFavourite() {
  return (
    <div className='UserFavourite'>
      <div className='container'>
        <div className='UserFavourite_items'>
        <GeneralCard imgSrc={b1} title="Amet augue justo" price="122" rate="4.5"/>
            <GeneralCard imgSrc={b1} title="Amet augue justo" price="122" rate="4.5"/>
            <GeneralCard imgSrc={b1} title="Amet augue justo" price="122" rate="4.5"/>
            <GeneralCard imgSrc={b1} title="Amet augue justo" price="122" rate="4.5"/>
            <GeneralCard imgSrc={b1} title="Amet augue justo" price="122" rate="4.5"/>
            <GeneralCard imgSrc={b1} title="Amet augue justo" price="122" rate="4.5"/>
            <GeneralCard imgSrc={b1} title="Amet augue justo" price="122" rate="4.5"/>
            <GeneralCard imgSrc={b1} title="Amet augue justo" price="122" rate="4.5"/>
        </div>
      </div>
    </div>
  )
}
