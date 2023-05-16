import React from 'react'

export default function Destinationdata({heading,text,img1,img2,classNam}) {
  return (
    <div>
      <div className={classNam}>
        <div className='des-text'>
            <h2>{heading}</h2>
            <p>
               {text}
            </p>
        </div>
        <div className='image'>
            <img alt='img' src={img1}/>
            <img alt='img' src={img2}/>
        </div></div>
    </div>
  )
}
