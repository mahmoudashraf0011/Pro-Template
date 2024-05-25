import React from 'react'
import CatagoryCard from './CatagoryCard'
import c1 from './../../../images/catagories/1.png';
import c2 from './../../../images/catagories/2.png';
import c3 from './../../../images/catagories/3.png';
import c4 from './../../../images/catagories/4.png';
import c5 from './../../../images/catagories/5.png';
import c6 from './../../../images/catagories/6.png';
import PageTitle from '../Utility/PageTitle';


export default function AllcategoryContainer() {
  return (
    <section className='allCategory'> 
      <div className='container'>
        <PageTitle title="all categories" />
        <div className='catagory_items'>
            <CatagoryCard imgSrc={c1} catagory="top"/>
            <CatagoryCard imgSrc={c2} catagory="recent"/>
            <CatagoryCard imgSrc={c3} catagory="best"/>
            <CatagoryCard imgSrc={c4} catagory="discount"/>
            <CatagoryCard imgSrc={c5} catagory="new"/>
            <CatagoryCard imgSrc={c6} catagory="common"/>
            <CatagoryCard imgSrc={c1} catagory="top"/>
            <CatagoryCard imgSrc={c2} catagory="recent"/>
            <CatagoryCard imgSrc={c3} catagory="best"/>
            <CatagoryCard imgSrc={c4} catagory="discount"/>
            <CatagoryCard imgSrc={c5} catagory="new"/>
            <CatagoryCard imgSrc={c6} catagory="common"/>
            <CatagoryCard imgSrc={c1} catagory="top"/>
            <CatagoryCard imgSrc={c2} catagory="recent"/>
            <CatagoryCard imgSrc={c3} catagory="best"/>
            <CatagoryCard imgSrc={c4} catagory="discount"/>
            <CatagoryCard imgSrc={c5} catagory="new"/>
            <CatagoryCard imgSrc={c6} catagory="common"/>
        </div>
      </div>

    </section>
  )
}
