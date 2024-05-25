import React from 'react'
import '../../Styles/PageTitle.css'
export default function PageTitle({title}) {
  return (
    <div>
      <h2 className='pageTitle'>{title}</h2>
    </div>
  )
}
