import React from 'react'
import f1 from '../../../images/features/1.png'
import f2 from '../../../images/features/2.png'
import f3 from '../../../images/features/3.png'
import f4 from '../../../images/features/4.png'
import '../../Styles/Home/Features.css'
export default function Features() {
  return (
    <div className='features' id='features'>
      <div className='container'>
        <div className='features_items'>
            <div className='feature_item'>
                <div className='feature_img'>
                    <img src={f1} alt='feature' />
                </div>
                <div className='feature_content'>
                    <h4 className='feature_title'>Free Shipping</h4>
                    <p className='feature_desc'>On all orders over $75.00</p>
                </div>
            </div>
            <div className='feature_item'>
                <div className='feature_img'>
                    <img src={f2} alt='feature' />
                </div>
                <div className='feature_content'>
                    <h4 className='feature_title'>Free Returns</h4>
                    <p className='feature_desc'>Returns are free within 9 days</p>
                </div>
            </div>
            <div className='feature_item'>
                <div className='feature_img'>
                    <img src={f3} alt='feature' />
                </div>
                <div className='feature_content'>
                    <h4 className='feature_title'>100% Payment Secure</h4>
                    <p className='feature_desc'>Your payment are safe with us.</p>
                </div>
            </div>
            <div className='feature_item'>
                <div className='feature_img'>
                    <img src={f4} alt='feature' />
                </div>
                <div className='feature_content'>
                    <h4 className='feature_title'>Support 24/7</h4>
                    <p className='feature_desc'>Contact us 24 hours a day</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}
