import React from 'react'
import logo from  '../../../images/logo.png'
import "../../Styles/Footer.css"
export default function Footer() {
  return (
        <footer>
            <div class="footer-content">
                <div class="footer-logo">
                 <img src={logo} alt="logo" draggable="false" />
                </div>        
                <ul>
                    <li href="#"><i class="icon fa fa-facebook fa-1x"></i></li>
                    <li href="#"><i class="icon fa fa-twitter fa-1x"></i></li>
                    <li href="#"><i class="icon fa fa-google-plus fa-1x"></i></li>
                    <li href="#"><i class="icon fa fa-instagram fa-1x"></i></li>
                    <li href="#"><i class="icon fa fa-linkedin fa-1x"></i></li>
                    <li href="#"><i class="icon fa fa-youtube fa-1x"></i></li>
                </ul>
                <div class="copywrite">
                 <div>copyright © 2024.all rights reserved.designed by <span>Mahmoud Ashraf</span></div>
                </div>
            </div>
        </footer>
  )
}
