import React from 'react'
import "./RecentTrip.style.css"
import Recettripdata from './Recettripdata'
export default function Recentt() {
  return (
    <div>
      <div className='trip'>
        <h1>Recent Software History</h1>
        <p>HEALTH MATTERS MOST</p>
      </div>
<div className='tripcard'>
    <Recettripdata
        imga="https://images.unsplash.com/photo-1545424436-1be2b5c0d0fc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"  
        heading="Malaysia"
        paragraph="Our recent trip to Malaysia was a true delight for travelers seeking adventure and culture. From bustling Kuala Lumpur to the serene beaches of Langkawi, our tour company provided a seamless experience for exploring the vibrant country. Our itinerary included activities such as jungle trekking, island hopping, and experiencing the rich Malay cuisine."
        >
    </Recettripdata>
    <Recettripdata
        imga="https://images.unsplash.com/photo-1569974498991-d3c12a504f95?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"  
        heading="America"
        paragraph="Our recent trip to Malaysia was a true delight for travelers seeking adventure and culture. From bustling Kuala Lumpur to the serene beaches of Langkawi, our tour company provided a seamless experience for exploring the vibrant country. Our itinerary included activities such as jungle trekking, island hopping, and experiencing the rich Malay cuisine."
        >
    </Recettripdata>
    <Recettripdata
        imga="https://images.unsplash.com/photo-1511489731872-324afc650052?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80"  
        heading="Canada"
        paragraph="Our recent trip to Canada was a true delight for travelers seeking adventure and culture. From bustling Kuala Lumpur to the serene beaches of Langkawi, our tour company provided a seamless experience for exploring the vibrant country. Our itinerary included activities such as jungle trekking, island hopping, and experiencing the rich Malay cuisine."
        >
    </Recettripdata>
</div>
    </div>
  )
}
