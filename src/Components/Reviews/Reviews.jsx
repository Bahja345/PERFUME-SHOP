import React from 'react'
import './Reviews.css'
import image1 from '../../assets/image2.jpg'
import image2 from '../../assets/image.jpg'
import image3 from '../../assets/image3.jpg'

const Reviews = () => {
  return (
    <div className='h1 container' id="Reviews">
      <h1>Customer Reviews</h1>
      <div className='reviews row text-center '>
        <div className='review-card col-md-4 p-3'>
          <img src={image2} alt="Customer" className='img-fluid rounded-circle' width={"120px"} />
          <p style={{ fontSize: "13px", textAlign: "center" }}>"Amazing fragrances that last all day! Highly recommend  Perfume Palace for their quality and variety."</p>
          <p style={{ fontSize: "15px", textAlign: "center" }}>- William K.</p>
        </div>
        <div className='review-card col-md-4 p-3'>
          <img src={image2} alt="Customer" className='img-fluid rounded-circle' width={"120px"} />
          <p style={{ fontSize: "13px", textAlign: "center" }}>"The customer service at Perfume Palace is exceptional.They helped me find the perfect scent for my wedding day!"</p>      <p style={{ fontSize: "15px", textAlign: "center" }}>- John D.</p>
        </div>
        <div className='review-card col-md-4 p-3'>
          <img src={image2} alt="Customer" className='img-fluid rounded-circle' width={"120px"} />
          <p style={{ fontSize: "13px", textAlign: "center" }}>"I love the unique selection of perfumes at Perfume Palace. I've discovered so many new favorites here!"</p>
          <p style={{ fontSize: "15px", textAlign: "center" }}>- Anthony k.</p>
        </div>
      </div>
    </div>



  )
}

export default Reviews
