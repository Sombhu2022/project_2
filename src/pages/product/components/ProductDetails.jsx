import React, { useEffect, useState } from 'react'

import './productDetails.scss'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductByProductId } from '../../../redux/product/productController';

function ProductDetails() {
    const { productId } = useParams();
    console.log("product id" , productId);
    const dispatch = useDispatch();
    const [product , setProduct] = useState()

    const { selectProduct , status } = useSelector(state=>state.product)
    useEffect(()=>{
        dispatch(fetchProductByProductId(productId))
    },[])

    useEffect(()=>{
      if(status.fetchProduct === 'success') setProduct(selectProduct)
    },[status])
 console.log(product , selectProduct);

 const deleteProduct=(e)=>{
   e.preventDefault();
 }
 const editProduct=(e)=>{
   e.preventDefault();
 }

  return (
    <>
      <div className="product_container">
        <div className="img_container">
          <img src={product?.productImage?.url} alt="" />
        </div>
        <div className="product_info">
          <h2>{product?.productName}</h2>
          <p>{product?._id}</p>
          <p>{product?.totalPrice} <del> {product?.price} </del> <sup> {product?.discount}%</sup> </p>
          <button className='delete_product' onClick={deleteProduct}> delete</button>
          <button className='edit_product' onClick={editProduct}> Edit </button>
        </div>
      </div>
    
    </>
  )
}

export default ProductDetails