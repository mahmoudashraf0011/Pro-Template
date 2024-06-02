import React, { useEffect } from 'react'
import '../../Styles/Home/About.css'
import CountUp from 'react-countup'
import g1 from '../../../images/about/1.jpg'
import g2 from '../../../images/about/2.jpg'
import g3 from '../../../images/about/3.jpg'
import g4 from '../../../images/about/4.jpg'

export default function About() {

    let startCount=(el)=>{
        let goal = el.dataset.v;
        let count = setInterval(() => {
          el.textContent++;
          if (el.textContent == goal) {
            clearInterval(count);
          }
        }, 2000/goal);
      }
    
    let RunCount=()=>{
        let nums = document.querySelectorAll(".about_counter_item > .about_count > .n");
        let section = document.querySelector(".about");
        let started = false;
        window.onscroll = function () {
            if (window.scrollY >= section.offsetTop) {
                if (!started) {
                    nums.forEach((num) => startCount(num));
                }
                started = true;
            }
            };
    }
    useEffect(()=>{
     RunCount();
    },[])


  return (
    <div className='about' id='about'>
      <div className='container'>
        <div className='item_header'>
                <h2 >About US</h2>
        </div>
        <div className='about_items'>
        
            <div className='about_content'>
                <span className='about_span'>OUR STATISTICS</span>
                <h3 className='about_title'>Professional Service & Care In A Pleasant Ambience</h3>
                <p className='about_desc'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan</p>
                
                <div className='about_counter'>
                    <div className='about_counter_item'>
                        <h3 className='about_count' ><span className='n' data-v="89">0</span>K+</h3>
                        <span className='about_count_title'>Happy Customers</span>
                    </div>
                    <div className='about_counter_item'>
                        <h3 className='about_count' ><span className='n' data-v="47">0</span>K+</h3>
                        <span className='about_count_title'>Products Sold</span>
                    </div>
                    <div className='about_counter_item last'>
                        <h3 className='about_count' ><span className='n' data-v="15">0</span>K+</h3>
                        <span className='about_count_title'>Years Experience</span>
                    </div>
                </div>
                <button className='about_btn'>See More</button>
           </div>
           <div className='about_bgs'>
            <div className='about_img'>
                <img src={g1} alt='about' />
            </div>
            <div className='about_img'>
                <img src={g2} alt='about' />
            </div>
            <div className='about_img'>
                <img src={g3} alt='about' />
            </div>
            <div className='about_img'>
                <img src={g4} alt='about' />
            </div>
           </div>

        </div>
      </div>
    </div>
  )
}
