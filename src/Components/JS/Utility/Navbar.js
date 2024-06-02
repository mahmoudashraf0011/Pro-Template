import React from 'react'
import logo from "../../../images/logo.png"
import "../../Styles/Utility/Navbar.css"
import MainSearchHook from '../../../LogicHooks/Search/MainSearchHook'
import { NavLink } from 'react-router-dom';
import NavbarLinks from './NavbarLinks';
export default function Navbar() {
    const [word,handleMainSearch]=MainSearchHook();
    let w;
    if(localStorage.getItem("wordSearch") !==null){
       w=localStorage.getItem("wordSearch")
        
      }
  return (
    <div className='navParent'>
        <nav>
            <div className='container'>
                <div className='navItems'>
                    <div className='navLogo'>
                        <a href='/'><img src={logo} alt="logo" /></a>
                    </div>
                    <form className='navForm'>
                        <input type='text' placeholder='Search Here...' value={w} onChange={handleMainSearch}/>
                    </form>
                    <div className='navIcons'>
                        <a href="/login"><i className="fa-regular fa-circle-user"></i> Login</a>
                        <a className='navCart' href='/cart'><i className="fa-solid fa-cart-shopping"></i> Cart</a>
                    </div>

                </div>
    
            </div>
        

        </nav>
        <NavbarLinks />
       
    </div>

  )
}
