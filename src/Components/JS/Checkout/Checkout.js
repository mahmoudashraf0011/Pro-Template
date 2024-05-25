import React from 'react'
import SectionTitle from '../Utility/SectionTitle'
import { Container } from 'react-bootstrap'
import '../../Styles/Checkout/Checkout.css'

export default function Checkout() {
  return (
    <div className='payment'>
      <SectionTitle title="Choose Payment Methods" />
      <Container>
        <form className='choosePayment'>
          <div className='choosePaymentWays'>
              <div className='choosePaymentWay'>
                  <input type="radio" id="vise" value="vise" name='choose'/>
                  <label for="vise">Payment via Visa</label>
              </div>
              <div className='choosePaymentWay'>
                  <input type="radio" id="offline" value="offline" name='choose'/>
                  <label for="offline">Payment when receiving</label>
              </div>
          </div>
          <span className='payment_price down'>$ 35000</span>
          <button className='payment_purchase  down'>purchase completion</button>
        </form>
      </Container>

    </div>
  )
}
