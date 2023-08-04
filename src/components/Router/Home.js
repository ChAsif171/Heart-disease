import React from 'react'
import Navbar from './Navbar'
import Heros from './Heros'
import './Hero.style.css'
import Destination from './Destination'
import Recentt from './Recentt'
import Footer from './Footer'
export default function Home() {
  return (
    <div>
    <Navbar/>
    <Heros 
    hclass="hero-text1"
    title="Heart Disease Predition Using Machine Learning"
        cName="hero"
        // text='Health Matters Most'
        heroImg="https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/News/heart-health/030317_heartdisease_THUMB_LARGE.jpg?w=1155&h=1528"
        buttontext="travel Plan"
        url="/"
        btnclass="show"

    />
  
    <Footer/>
    </div>
  )
}
