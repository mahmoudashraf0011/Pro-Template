import React from 'react'
import SectionTitle from '../Utility/SectionTitle'
import b1 from '../../../images/other/item.png'
import '../../Styles/HomeCard.css'
import GeneralCard from './GeneralCard'

export default function CardContainer({title,btnTitle,pathing}) {
  return (
    <section className='best'>
      <SectionTitle title={title} btnTitle={btnTitle} pathing={pathing}/>
      <div className='container'>
        <div className='best_items'>
            <GeneralCard imgSrc={b1} title="Amet augue justo" price="122" rate="4.5"/>
            <GeneralCard imgSrc={b1} title="Amet augue justo" price="122" rate="4.5"/>
            <GeneralCard imgSrc={b1} title="Amet augue justo" price="122" rate="4.5"/>
            <GeneralCard imgSrc={b1} title="Amet augue justo" price="122" rate="4.5"/>
        </div>
      </div>
    </section>
  )
}
