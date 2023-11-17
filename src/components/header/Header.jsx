import React from 'react'
import { MdOutlineLightMode } from 'react-icons/md'
import profileImage from './profile.png';
import './Header.css'

const Header = () => {
  return (
    <header className="header">
      <div className="head_container">

        <div className="left">
            <MdOutlineLightMode className='icon'/>
          <select name="">
            <option value="en">Pleace Select</option>
          </select>
          <span>30/10/2023 | Monday</span>
        </div>

        <div className="middle">
          <span>STOREMATE</span>
        </div>

        <div className="right">
            <span>React</span>
            <img src= {profileImage} alt="Profile" />
        </div>
        
      </div>
      
    </header>
  )
}

export default Header