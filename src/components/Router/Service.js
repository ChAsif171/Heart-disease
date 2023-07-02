

import React from 'react'
import Navbar from './Navbar'
import Heros from './Heros'
import './Hero.style.css'
import Footer from './Footer'
import Recentt from './Recentt'
export default function Service() {
  return (
    <div>
    <Navbar/>
    <Heros title="Service" 
        cName="heroabout"
        hclass="hero-text"
        
        heroImg="https://images.unsplash.com/photo-1531546561128-61de0316d6e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1333&q=80"
        
        btnclass="hide"

    />
       <Recentt/>
        <Footer/>
    </div>
  )
}

