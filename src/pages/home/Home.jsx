import React from 'react'
import './home.css'

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img1 from './images/img1.png'

import { data } from './data';
import { Link } from 'react-router-dom';

function Home() {
  var settings = {
  dots: true,
  infinite: true,
  arrows:true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1
};
  return (
    <>

   
  <div className='slider'>

   <Carousel infiniteLoop autoPlay axis='vertical' verticalSwipe="natural" showArrows={false} showThumbs={false} showStatus={false} interval={2500}>
    <div>
      
      <img src={img1} alt="" />
    </div>
    <div>
      <img src={img1} alt="" />
    </div>
    <div>
      <img src={img1} alt="" />
    </div>
    <div>
      <img src={img1} alt="" />
    </div>
    <div>
      <img src={img1} alt="" />
    </div>
  
   </Carousel>
    </div>


<div className='shop-conainer'>

    <Slider {...settings}>
     {
       data.map((ele , index )=>{
        return(
          <div className='shop' key={index}>
           <p>{ele.shop_name}</p>
           <p>{ele.location}</p>
           <p>{ele.rating}</p>

           <Link>
           <button>Check Out</button>
           </Link> 

          </div>
        )
       })
     }
     
    </Slider>
</div>

    </>
  )
}

export default Home

