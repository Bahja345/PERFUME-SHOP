import React from 'react'
import './Contact.css'

import { TbBrandTiktok } from "react-icons/tb";
// import {Instagram} from 'lucide-react';


const Contact = () => {
  return (
    <div className='h1' id="Contact">
      <h1>Contact Us </h1>
      <div className='contact'>
        <p style={{ fontSize: "13px", textAlign: "center" }} className='p'>We'd love to hear from you! Whether you have questions about our products, <br /> need assistance with an order, or just want to share your fragrance journey, our team is here to help. Reach out to us</p>

        <div className="row container-contact text-center">
          <div className="contact-card col-md-6">
            <h2>Get in Touch</h2>
            <div className="mb-1">
              <label htmlFor="fullName" className="form-label"></label>
              <input type="text" className="form-control" id="fullName" placeholder="Full Names" />
            </div>
            <div className="mb-1">
              <label htmlFor="telephone" className="form-label"></label>
              <input type="text" className="form-control" id="telephone" placeholder="Telephone No" />
            </div>
            <div className="mb-1">
              <label htmlFor="email" className="form-label"></label>
              <input type="email" className="form-control" id="email" placeholder="Email" />
            </div>
            <div className="mb-1">
              <label htmlFor="message" className="form-label"></label>
              <textarea className="form-control" id="message" rows="3"></textarea>
              <button className='btn'>Submit</button>
            </div>
          </div>
          <div className="contact-card col-md-6 d-flex flex-column align-items-center justify-content-center">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8361274640397!2d36.84308680380172!3d-1.2713594939372943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f16c7e4075e89%3A0xabf263424df915ec!2sKirongothi%20St%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1760466587562!5m2!1sen!2ske" width="100%" height="400" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>

      </div>
      
    </div>

  )
}

export default Contact
