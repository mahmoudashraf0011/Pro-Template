import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import '../../Styles/SectionTitle.css'
export default function SectionTitle({title,btnTitle,pathing}) {
  return (
    <div className='section_header'>
      <div className='container'>
        <div className='section_header_items'>
                <h3 className='section_title'>{title}</h3>
                {btnTitle?<Link to={`${pathing}`} className='section_btn' >{btnTitle}</Link>:null}
                
        </div>
      </div>

    </div>
  )
}
