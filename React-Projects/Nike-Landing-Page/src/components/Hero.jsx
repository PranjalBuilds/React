import React from "react";
import '../App.css';

const Hero = () => {
  return (
    <main className="hero container">
      <div className="hero-content">
        <h1 className="hero-title">YOUR FEET DESERVE THE BEST</h1>
        <p className="hero-desc">
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>

        <div className="hero-btn">
          <button>Shop now</button>
          <button className="btn">Category</button>
        </div>

        <div className="shopping">
          <p>Also Available On</p>

          <div className="flipzon">
            <a href="https://www.flipkart.com/campus-mike-n-men-s-sports-shoes-memory-insole-air-capsule-brilliance-lace-up-running-men/p/itmeea9f786d7eac
">
              <img src="/images/flipkart.png" loading="lazy" alt="Flipkart-link"/>
            </a>
            <a href="https://www.amazon.in/Campus-North-Plus-Running-Shoes/dp/B08PS8H5WV/ref=sr_1_7">
              <img src="/images/amazon.png" loading="lazy" alt="Amazon-link"/>
            </a>
          </div>
        </div>
      </div>
      <div className="hero-img">
        <img src="/images/shoe_image.png" id="shoe" loading="lazy" alt="Amazon-link" />
      </div>
    </main>
  );
};



export default Hero;
