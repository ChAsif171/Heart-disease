import React from 'react'
import './Destination.style.css';
import Destinationdata from './Destinationdata';
export default function Destination() {
  return (
    <div className='destination'>
    <h1>Popular Destinations
    </h1>
      <p>Tours give you the opportunity to see a lot,within a time frame</p>
      <Destinationdata heading="Lahore" text=" Lahore is a bustling city located in the province of Punjab, Pakistan. It is known for its rich culture, history, and beautiful architecture. Some of the famous tourist attractions in Lahore include the Badshahi Mosque, Lahore Fort, Shalimar Gardens, and the Walled City. Lahore is also known for its delicious food, vibrant nightlife, and colorful bazaars."
        img1="https://images.unsplash.com/photo-1601969695489-f10a1da1756a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
        img2="https://images.unsplash.com/photo-1531804308561-b6438d25a810?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=708&q=80" classNam='first-des'
      />
      <Destinationdata heading="Skardu" text=" Skardu is a popular tourist destination in northern Pakistan known for its breathtaking natural beauty. Visitors can enjoy activities such as trekking, camping, mountaineering, and skiing. The town is surrounded by majestic mountains, rivers, and lakes, and is home to historical landmarks such as the Kharpocho Fort and the Shigar Fort"
        img1="https://i.tribune.com.pk/media/images/011602864188-0/011602864188-0.jpg"
        img2="https://images.unsplash.com/photo-1614703185698-5bb9810638af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" classNam='first-rev'
      />
       <Destinationdata heading="Karachi" text=" Karachi is the largest and most populous city in Pakistan, located on the southern coast of the country. Known as the  City of Lights Karachi is a bustling metropolis with a diverse population, rich history, and vibrant cultural scene. Tourists can explore its beautiful beaches, historical landmarks, museums, art galleries, and delicious food."
        img1="https://images.unsplash.com/photo-1612375319248-200af66dd2f0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=648&q=80"
        img2="https://images.unsplash.com/photo-1598808456360-3c9274d57bb4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80" classNam='first-des'
      />
      </div>
   
  );
};
