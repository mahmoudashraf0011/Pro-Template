import React, { useEffect, useRef, useState } from 'react'
import logo from "../../../images/logo.png"
import "../../Styles/Utility/Navbar.css"
import MainSearchHook from '../../../LogicHooks/Search/MainSearchHook'
import { NavLink, useParams } from 'react-router-dom';
import NavbarLinks from './NavbarLinks';
import { NavDropdown } from 'react-bootstrap';
import ViewUserProductsCartHook from '../../../LogicHooks/Cart/ViewUserProductsCartHook';
export default function Navbar() {
    const [items,totalPrice,discount,coupon,countItems,cartID]=ViewUserProductsCartHook();
    const [word,handleMainSearch]=MainSearchHook();
    let w;
    if(localStorage.getItem("wordSearch") !==null){
       w=localStorage.getItem("wordSearch")
        
      }
    const [un,setUn]=useState('');
    useEffect(()=>{
        if(localStorage.getItem("user")){
            setUn(JSON.parse(localStorage.getItem("user")));
        } 
    },[])

    const onLogOut=(e)=>{
        localStorage.removeItem("user")
        localStorage.removeItem("token")
        localStorage.removeItem("role")
        setUn('');
        setTimeout(() => {
          window.location.href="/login"
        }, 200)
        

    }


    let role;
    if(localStorage.getItem("role")){
        role = localStorage.getItem("role");
        
    }

    const log=useRef();
    const onlogin=(e)=>{
        if(log.current.style.opacity==0){
            log.current.style.height="90px"
            log.current.style.opacity=1
            log.current.style.visibility="visible"
        }else{

            log.current.style.height="0px"
            log.current.style.opacity=0
            log.current.style.visibility="hidden"
        }


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
                        {
                            un?(
                            // <NavDropdown title={un.name} id="basic-nav-dropdown" >
                            //     {role=="user"?<NavDropdown.Item href="/user/profile">Profile</NavDropdown.Item>:(
                            //         <NavDropdown.Item href="/admin/allproducts">Control</NavDropdown.Item>
                            //     )}
                            //     <NavDropdown.Divider />
                            //     <NavDropdown.Item onClick={onLogOut} >Log Out</NavDropdown.Item>
                            // </NavDropdown>
                                <div className='login' onClick={onlogin} >
                                    {un.name}<i className="fa-solid fa-angle-down" style={{display:"inline-block",marginLeft:"5px"}}></i>
                                    <ul id="Dropdown" class="dropdowncontent" ref={log}>
                                    {role=="user"?<li><a href="/user/profile">Profile</a></li>:(
                                    <li><a href="/admin/allproducts">Control</a></li>
                                )}
                                        <li onClick={onLogOut}><a>log out</a></li>
                                    </ul>
                                </div>
                            ):<a href="/login" ><i className="fa-regular fa-circle-user"></i> Login</a>
                        }
                        <a className='navCart' href='/cart'><i className="fa-solid fa-cart-shopping"></i> <span className='cartNum'>{countItems || 0}</span>Cart</a>
                    </div>

                </div>
    
            </div>
        

        </nav>
         <NavbarLinks />          
         
    </div>

  )
}
//ma7157563@gmail.com