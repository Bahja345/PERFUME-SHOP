import React from 'react';
import './Header.css';
import logo from '../../assets/Mylogo.jpg';
import bg from '../../assets/Goodgirl.jpg';

const Header = () => {
  return (
    <div className='header'id="Home">
      <nav className="navbar navbar-expand-lg px-4">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={logo} alt="" width={"80px"} className='rounded' />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#Home">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#About">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#Products">Products</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#Reviews">Reviews</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#Contact">Contact</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#Login">Login</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
     


      <div style={{marginTop:'100px'}}>
        <h2>Welcome to Perfume Palace</h2>
      <p style={{fontSize:"19px"}}>Step into a realm of timeless elegance. At Perfume Palace,<br/> we curate the world’s finest fragrances to help you express your essence with sophistication and style.</p>
   
      </div>
    </div>

  );
};

export default Header;
