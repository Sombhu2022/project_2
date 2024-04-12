import React from 'react'
import './home.scss'

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
  dots: false,
  infinite: true,
  arrows:true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  variableWidth:"100%"
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


<div className='shop_conainer'>

    <Slider {...settings}  >
     {
       data?.map((ele , index )=>{
        return(
          <div className='shop' key={index}>
            <div className='img_container'>
               <img  src={img1}/>
            </div>
            <div className='shop_info'>

           <h2>{ele.shop_name}</h2>
           <p>{ele.location}</p>
           <p>{ele.rating}</p>
            </div>

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

