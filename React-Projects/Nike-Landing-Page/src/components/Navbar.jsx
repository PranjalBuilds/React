import React from 'react';
import '../App.css';

const Navbar = () => {
  return (
    <>
      <nav className='container'>
            <div className='logo'>
                <img src="/images/brand_logo.png" id="logo" loading="lazy" alt="Logo" />
            </div>

            <ul>
                <li><a href="https://google.com">Menu</a></li>
                <li><a href="#">Location</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>

            <button className="login-btn">Login</button>
        </nav>
    </>
  )
}

export default Navbar