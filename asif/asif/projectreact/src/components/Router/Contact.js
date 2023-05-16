
import './Formstyle.css'
import React from 'react'
import Navbar from '../Navbar'
import Footer from './Footer'
import Heros from './Hero/Heros'
import Form from './Form'
import './Hero.style.css'
export default function Contact() {
  return (
    <div>
    <Navbar/>
    <Heros title="Contact" 
        cName="heroabout"
        hclass="hero-text"
        
        heroImg="https://images.unsplash.com/photo-1534777367038-9404f45b869a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        
        btnclass="hide"

    />
    <Form/>
        <Footer/>
    </div>
  )
}

