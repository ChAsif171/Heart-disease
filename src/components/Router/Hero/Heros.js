import React from 'react'

export default function Heros({buttontext,btnclass,url,heroImg,title,text,cName,hclass}) {
  return (
    <div className={cName}>
      <img alt='herpimg' src={heroImg}/>
      <div className={hclass}>
      <h1>{title}</h1>
      <p>{text}</p>
      
      </div>
    </div>
  )
}
