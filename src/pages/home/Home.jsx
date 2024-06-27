import React from 'react'
import './home.scss'

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import img1 from '../../media/images/img1.png'

import { Link } from 'react-router-dom';
import Card from '../../components/Card';
import Shop from '../shop/componets/Shop.jsx';


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y , Virtual } from 'swiper/modules';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useSelector } from 'react-redux';

function Home() {

  // const { user , isAuthenticate} = useSelector(state=> state.user)
  const { shop , status} = useSelector(state=>state.shop)
  const { user } = useSelector(state => state.user)

 console.log(user);

  return (
    <> 
  <div className='slider'>

   <Carousel infiniteLoop autoPlay axis='vertical' verticalSwipe="natural" showArrows={false} showThumbs={false} showStatus={false} interval={2500}>
    <div>
      
      <img src={img1} alt="img 1" />
    </div>
    <div>
      <img src={img1} alt="img 2 " />
    </div>
    <div>
      <img src={img1} alt="img 3" />
    </div>
    <div>
      <img src={img1} alt="img 4" />
    </div>
    <div>
      <img src={img1} alt="img 5" />
    </div>
  
   </Carousel>
    </div>
<div className='info'>
     <h3>Find Your Need Locally </h3>

     <Link to={'/product'}>
        Find Shop
     </Link>
    {
      user && user?.role === 'admin' ?(<Link to={'dashboard'}>
      Dashboard
      </Link>):""
    } 
</div>

<div className='shop_conainer'>

<Swiper
      modules={[Navigation, Pagination,Virtual]}
      spaceBetween={50}
      slidesPerView={4}
      navigation
      virtual
      pagination={{type: 'fraction'}}
      // onSwiper={(swiper) => console.log(swiper)}
      // onSlideChange={() => console.log('slide change')}
      centeredSlides={true}
      breakpoints={{
        300:{
          slidesPerView: 1,
          spaceBetween: 20,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView:3,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 50,
        },
      }}
      // onSlideResetTransitionStart={}
      
    >
     {
        shop?.map((ele , index )=>{
        return(
          <div className='shop_cart' key={ele._id}>
            <SwiperSlide ><Shop name={ele.shopName} rating={ele.ratings} location={ele.location?.city} img={ele.shopImage?.url} id={ele._id} /></SwiperSlide>
          </div>
        )
       })
     }
  
      
    </Swiper>
      
</div>
{/* <Shop name={"som"} location={"kolkata"} rating={0} /> */}
    </>
  )
}

export default Home

