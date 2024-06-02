import React from 'react'
import '../../Styles/Home/Blog.css'
import b1 from '../../../images/blog/1.webp'
import b2 from '../../../images/blog/2.webp'
import b3 from '../../../images/blog/3.webp'

export default function Blog() {
  return (
    <div className='blog' id='blog'>
        <div className='container'>
            <div className='item_header'>
                <h2>latest Blog</h2>
            </div>
            <div className='blog_items'>
                <div className='blog_item'>
                    <div className='blog_img'>
                        <img src={b1}  alt='blog'/>
                    </div>
                    <div className='blog_content' >
                        <li className='blog_date'><i className="fa-solid fa-calendar-days"></i> March 01, 2024</li>
                        <p className='blog_desc'>Beyond the Screen: Navigating the World of Smartphones</p>
                        <button className='blog_btn'>Read more</button>
                    </div>
                </div>
                <div className='blog_item'>
                    <div className='blog_img'>
                        <img src={b2}  alt='blog'/>
                    </div>
                    <div className='blog_content' >
                        <li className='blog_date'><i className="fa-solid fa-calendar-days"></i> April 18, 2024</li>
                        <p className='blog_desc'>A Glimpse into Men's Fashion Trends: What's Hot and What's Not</p>
                        <button className='blog_btn'>Read more</button>
                    </div>
                </div>
                <div className='blog_item'>
                    <div className='blog_img'>
                        <img src={b3}  alt='blog'/>
                    </div>
                    <div className='blog_content' >
                        <li className='blog_date'><i className="fa-solid fa-calendar-days"></i> June 25, 2024</li>
                        <p className='blog_desc'>Unleashing Wireless Freedom: The Ultimate Guide to Bluetooth Earphones</p>
                        <button className='blog_btn'>Read more</button>
                    </div>
                </div>
            </div>
        </div>
      
    </div>
  )
}
