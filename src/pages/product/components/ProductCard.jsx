import React from 'react'
import { Link } from 'react-router-dom'
import './productCard.scss'
import { FaBoxOpen } from "react-icons/fa";

function ProductCard({id,image , productName , price , discount , stock}) {
  return (
    <div className='product_card'>
        <div className='img_container'>
            <img src={image} alt="" />
        </div >
        <div className="product_other_info">
            <h3> {productName} </h3>
           
        </div>

    </div>
  )
}

export default ProductCard