import React from "react";
import img1 from '../componets/addShop/shop.png'
import { Link } from "react-router-dom";
import { Rate } from "antd";

import './shop.scss'

const Shop = ({ id , name , location , rating , img  }) => {

  console.log(location);
	return (
		<div className="shop">
		<div className='img_container'>
		   <img  src={img || img1}/>
		</div>
		<div className='shop_info'>

	   <h2>{name}</h2>
	   <p>{location?location?.map((ele,index)=><span key={index}>{ele}</span>):""}</p>
       
	   <Rate count={5} value={rating || 0} allowHalf disabled  /> <span style={{marginLeft:"5px"}}>{rating}</span>
		</div>

	   <Link to={`/shop/${id}`}>
	   <button>Visit shop</button>
	   </Link> 

	  </div>
	);
};

export default Shop;