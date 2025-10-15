import React from 'react'
import './About.css'
import image1 from '../../assets/khamrah.jpg'
const About = () => {
  return (
   
   <div className='h1' id="About">
      
     <h1>About Us</h1>
     
     
    <div className='container about'>

      <div className="row">
        <div className="col-md-6">
         
          <img src={image1} alt="About Us" className="about-image" width={"100%"} data-aos="fade-left"/>
        </div>
        <div className="col-md-6">
          <h1>The Art of Scent</h1>
          <p style={{fontSize:"13px", textAlign:"center" }}>Every fragrance tells a story yours begins here. At Perfume Palace,<br/> we blend timeless elegance with <br /> modern flair to create scents that speak louder than words.</p>
        </div>
      </div>
</div>

    </div>
  )
}

export default About
