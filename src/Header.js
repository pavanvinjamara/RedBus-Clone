import React from 'react'
import './Header.css'
import LogoR from './assets/redbusbg.png'
import { Link } from 'react-router-dom'
// import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='header'>
        <div className='img-contain'>
          <Link to="/">
        <img src={LogoR} alt='redbus logo' className='logoimg'/>
        </Link>
        <h1 className='logo-header'>RedBus</h1>
        </div>
        <div className='navbar'>
            <ul>
              
                <li>Home</li>
                
                <li>Tickets</li>
                <li>LogIn</li>
            </ul>
        </div>
    </div>
  )
}

export default Header