
import React from 'react'
import Navbar from './Navbar'
import Heros from './Heros'
import './Hero.style.css'
import Footer from './Footer'
import Aboutus from './Aboutus'
export default function About() {
  return (
    <div>
    <Navbar/>
    <Heros title="About" 
        cName="heroabout"
        hclass="hero-text"
        
        heroImg="https://images.unsplash.com/photo-1462826303086-329426d1aef5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        
        btnclass="hide"

    />
    <Aboutus/>
        <Footer/>
    </div>
  )
}

