import React from 'react'
import "./RecentTrip.style.css"
export default function Recettripdata({imga,heading,paragraph}) {
  return (
    <div>
      <div className='t-card'>
        <div className='t-image'>
            <img src={imga} alt="image"/>
        </div>
        <h4>{heading}</h4>
        <p>{paragraph}</p>
      </div>
    </div>
  )
}
