import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
import { Facebook, InstagramIcon, Linkedin, TicketIcon, Twitter } from 'lucide-react'
import { TbBrandTiktok } from 'react-icons/tb'

const Footer = () => {
  return (
    <div className=' footer row text-center' id="Footer">
      <div className='social bg-gold text-white mb-4'>
        <div className='icons row'>
          <h2 className='text-center'>Follow us</h2>
          <div className='icon-card col-md-12 gap-2 d-flex align-items-center justify-content-center'>
            {/* <Instagram/>
           */}
            <a href=""> <InstagramIcon color='white' /></a>
            <a href=""> <Facebook color='white' /></a>
            <a href=""> <Twitter color='white' /></a>
            <a href=""> <TbBrandTiktok color='white' /></a>
          </div>
        </div>
      </div>
      <div className='col-md-12'>
        <div>
          <Link to="/privacy" style={{ color: "white", textDecoration: "none", marginBottom: "10px" }}>Privacy Policy</Link>
        </div>
        <hr style={{color:"white"}}/>
        <p style={{color:"white"}}>© 2025 Perfume Palace. All rights reserved.</p>
      </div>
    </div>


  )
}

export default Footer
