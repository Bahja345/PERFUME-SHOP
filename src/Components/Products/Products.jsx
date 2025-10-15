import React from 'react'
import './Products.css'
import image1 from '../../assets/Fakhar.jpg'

import image2 from '../../assets/Bound.jpg'

import image3 from '../../assets/Mazaaji.jpg'

import image4 from '../../assets/Qamra.jpg'

import image5 from '../../assets/Asad.jpg'

import image6 from '../../assets/Musk Noir.jpg'

import image7 from '../../assets/Sheikh.jpg'
import image8 from '../../assets/Hayati.jpg'

import image9 from '../../assets/Goodgirl.jpg'




const Products = () => {
  return (
    <div className='h1' id="Products">
      <h1>Our Perfumes</h1>
      <div className='products row text-center'>      

        <div className='product-card col-md-3'>
  <img src={image1} alt="Fakhar" className='img-fluid' />
<p style={{fontSize:"18px", textAlign:"center"}}>Fakhar</p>
          <span class="price">ksh1700</span> <br/>
<button type="button" class="btn">Buy Now</button>
        </div>
        <div className= 'product-card col-md-3'>
  <img src={image2} alt="Bound" className='img-fluid' />
   <p style={{fontSize:"18px", textAlign:"center"}}>Bound</p>
          <span class="price">ksh2000</span> <br/>
<button type="button" class="btn">Buy Now</button>
        </div>
        <div className='product-card col-md-3'>
  <img src={image3} alt="Mazaaji" className='img-fluid' />
<p style={{fontSize:"18px", textAlign:"center"}}>Mazaaji</p>
          <span class="price">ksh1600</span> <br/>
          <button className='btn' >Buy Now</button>
        </div>
      </div>
      <div className='Products2 row text-center'>
        <div className='product-card col-md-3'>
         <img src={image4} alt="Qamrah" className='img-fluid' />
        <p style={{fontSize:"18px", textAlign:"center"}}>Qamrah</p>
          <span class="price">ksh3500</span> <br/>
         <button type="button" class="btn">Buy Now</button>
        </div>

        <div className='product-card col-md-3'>

        <img src={image5} alt="Asad" className='img-fluid' />
        <p style={{fontSize:"18px", textAlign:"center"}}>Asad</p>
          <span class="price">ksh1000</span> <br/>
        <button type="button" class="btn">Buy Now</button>
        </div>

        <div className='product-card col-md-3'>
        <img src={image6} alt="Musk" className='img-fluid' />
         <p style={{fontSize:"18px", textAlign:"center"}}>Musk Noir</p>
          <span class="price">ksh2500</span> <br/>
       <button type="button" class="btn">Buy now</button>
        </div>  
      </div>
      <div className='Products3 row text-center'>
        <div className='product-card col-md-3'>
        <img src={image7} alt="Sheikh" className='img-fluid' />
         <p style={{fontSize:"18px", textAlign:"center"}}>Sheikh</p>
          <span class="price">ksh3000</span> <br/>
       <button type="button" class="btn">Buy now</button>
        </div>  
     <div className='product-card col-md-3'>
        <img src={image8} alt="Scandal" className='img-fluid' />
<p style={{fontSize:"18px", textAlign:"center"}}>Scandal</p>
          <span class="price">ksh1700</span> <br/>
<button type="button" class="btn">Buy Now</button>
     

     </div>
      <div className='product-card col-md-3'>
        <img src={image9} alt="Goodgirl" className='img-fluid' />
<p style={{fontSize:"18px", textAlign:"center"}}>Goodgirl</p>
          <span class="price">ksh10000</span> <br/>
<button type="button" class="btn">Buy Now</button>
        </div>

      </div>

    </div>
   
  )
}

export default Products
