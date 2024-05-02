import React from "react";
import img1 from '../media/images/img1.png'
import { Link } from "react-router-dom";

import './shop.scss'

const Shop = ({ name , location , rating , img=""  }) => {


	return (
		<div className="shop">
		<div className='img_container'>
		   <img  src={img1}/>
		</div>
		<div className='shop_info'>

	   <h2>{name}</h2>
	   <p>{location}</p>
	   <p>{rating}</p>
		</div>

	   <Link>
	   <button>Check Out</button>
	   </Link> 

	  </div>
	);
};

export default Shop;