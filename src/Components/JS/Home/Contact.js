import React from 'react'
import '../../Styles/Home/Contact.css'
import bg from '../../../images/contact/1.jpg'
import { useState } from 'react';
import Swal from 'sweetalert2'

export default function Contact() {
 const [email,setEmail]=useState("");
 const handleEmail=(e)=>{
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const check=emailRegex.test(email);
    if(email ===''){
        Swal.fire({
            title: "Warning!",
            text: "Please Enter Your Email Address!",
            icon: "warning"
          });
    }else if(check){
        let ele=document.querySelector(".accept");
        ele.style.height=60+"px";
        ele.style.opacity=1
        ele.style.visibility="visible"
  
    }else{
        Swal.fire({
            title: "OOPS!",
            text: "This is Unvalid Email Address !",
            icon: "error"
          });
    
    }
    setEmail("")
}
  return (
    <div className='contact' style={{backgroundImage:`url${bg}`} } id="contact">
        <div className='container'>
            <div className='contact_data'>
                <span className='contact_span'>OUR STATISTICS</span>
                <h3 className='contact_title'>Don't Miss Out On Exciting Promotions</h3>
                <p className='contact_desc'>Lorem ipsum dolor sit amet, c onsectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis</p>
      
                <form className='contact_form'>
                    <input type='email' placeholder='Your Email Address....' className='contact_form_input' onChange={(e)=>setEmail(e.target.value)} value={email}/>
                    <button className='contact_form_btn' onClick={handleEmail}>Subscribe</button>
                    <div className='accept' >Subcription was successfull</div>
                </form>
            </div>
        </div>
    </div>
  )
}
