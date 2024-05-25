import React from 'react'
import logo from "../../../images/logo.png"
import "../../Styles/Navbar.css"
export default function Navbar() {
  return (
    <nav>
        <div className='container'>
            <div className='navItems'>
                <div className='navLogo'>
                     <a href='/'><img src={logo} alt="logo" /></a>
                </div>
                <form className='navForm'>
                    <input type='text' placeholder='Search Here...' />
                </form>
                <div className='navIcons'>
                    <a className='navLogin' href='/login'><i className="fa-regular fa-circle-user"></i> Login</a>
                    <a className='navCart' href='/cart'><i className="fa-solid fa-cart-shopping"></i> Cart</a>
                </div>
            </div>
        </div>
      

    </nav>
  )
}
