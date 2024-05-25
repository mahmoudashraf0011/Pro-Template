import React from 'react'
import logo from "../../../images/logo.png"
import "../../Styles/Navbar.css"
export default function Navbar() {
  return (
    <nav>
        <div className='container'>
            <div className='navItems'>
                <div className='navLogo'>
                     <a href='/Pro-Template/'><img src={logo} alt="logo" /></a>
                </div>
                <form className='navForm'>
                    <input type='text' placeholder='Search Here...' />
                </form>
                <div className='navIcons'>
                    <a href="/Pro-Template/login" onclick="window.open('/Pro-Template/login', '_self');"><i className="fa-regular fa-circle-user"></i> Login</a>
                    <a className='navCart' href='/Pro-Template/#/cart'><i className="fa-solid fa-cart-shopping"></i> Cart</a>
                </div>
            </div>
        </div>
      

    </nav>
  )
}
