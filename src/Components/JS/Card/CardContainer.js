import React from 'react'
import SectionTitle from '../Utility/SectionTitle'
import b1 from '../../../images/1.png'
import b2 from '../../../images/2.png'
import b3 from '../../../images/5.png'
import b4 from '../../../images/6.png'

import '../../Styles/Card/Card.css'
import GeneralCard from './GeneralCard'

export default function CardContainer({title,btnTitle,pathing}) {
  return (
    <section className='best'>
      <SectionTitle title={title} btnTitle={btnTitle} pathing={pathing}/>
      <div className='container'>
        <div className='best_items'>
            <GeneralCard imgSrc={b1} title="Amet augue justo" price="122" rate="4.5"/>
            <GeneralCard imgSrc={b2} title="Amet augue justo" price="122" rate="4.5"/>
            <GeneralCard imgSrc={b3} title="Amet augue justo" price="122" rate="4.5"/>
            <GeneralCard imgSrc={b4} title="Amet augue justo" price="122" rate="4.5"/>
        </div>
      </div>
    </section>
  )
}
