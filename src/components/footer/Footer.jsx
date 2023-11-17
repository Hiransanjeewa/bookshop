import React from 'react'
import './Footer.css'
import { FiDownload } from 'react-icons/fi'

const Footer = () => {
  return (
    <footer className="footer">

      <div className="fcontainer">
        <div className="stat">

          <div className="one">
            <span>New Button</span>
            <span>Rs.1000.00</span>
          </div>
          <div className="one">
            <span>Discount</span>
            <span>Rs.0.00</span>
          </div>
          <div className="one">
            <span>Tax</span>
            <span>Rs.99.00</span>
          </div>
          <div className="four">
            Item Count : 400
            </div>
          <div className="one">
            <span>New Button</span>
            <span>Rs.1000.00</span>
          </div>
          <div className="one">
            <span>Shipping</span>
            <span>Rs.1000.00</span>
          </div>
          <div className="one">
            <span>Packaging</span>
            <span>Rs.1000.00</span>
          </div>
          <div className="one">
            <span>Total</span>
            <span>Rs.199,999.00</span>
          </div>

        </div>

        <div className="finance">
          <button className="two"><FiDownload className='icon'/>Cash</button>
          <button className="three"><FiDownload className='icon'/>Pay</button>
          <button className="three"><FiDownload className='icon'/>Card</button>
          <button className="three"><FiDownload className='icon'/>Credit</button>
          <button className="one">Button</button>
          <button className="one">Button</button>
          <button className="one">Button</button>
          <button className="one">Button</button>
        </div>
      </div>
    </footer>
  )
}

export default Footer