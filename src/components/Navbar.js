import {useState} from 'react'
import {Link} from 'react-router-dom'
import "./Navbar.style.css"

import {Navdata} from "./Navdata"
export default function Navbar() {
  const [isCrossIconShown, setIsCrossIconShown] = useState(true);
  
  const handle=()=>{
    setIsCrossIconShown(!isCrossIconShown);
  }
  return (
    <div>
      <nav className='NavbarItems'>
        <h1 className='nav-logo'>HDPML</h1>

        <div className='menu-icons' onClick={handle}> 
          <i className={isCrossIconShown ? "fas fa-bars":"fas fa-times"}></i>
          
        </div>
        <ul className={isCrossIconShown ?"nav-menu":"nav-menu active"}>
        {Navdata.map((new1,index)=>{
          return(
            <li key={index}>
              <Link className={new1.cname} to={new1.url}>
                <i className={new1.img}></i>
                {new1.title}
              </Link>
              
            </li>
          );
        
        })}
        
           <button>Signup</button>
        </ul>
      </nav> 
    </div>
  )
}
