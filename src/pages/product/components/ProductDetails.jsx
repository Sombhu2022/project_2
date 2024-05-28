import React, { useEffect, useState } from 'react'

import './productDetails.scss'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { deleteProduct,  fetchProductByProductId } from '../../../redux/product/productController';
import { resetStatus } from '../../../redux/product/productSlice';

function ProductDetails() {
    const { productId } = useParams();
    console.log("product id" , productId);
    const dispatch = useDispatch();
    const [product , setProduct] = useState()
    const [shopId , setShopId] = useState()
    const [isOwner , setIsOwner] = useState(false)
    const navigate = useNavigate()
     
    const { selectProduct , status } = useSelector(state=>state.product)
    const user = useSelector(state => state.user)
    useEffect(()=>{
        dispatch(fetchProductByProductId(productId))
    },[])

    useEffect(()=>{
      if(status.fetchProduct === 'success') {
        setProduct(selectProduct)
        setShopId(selectProduct?.shopRef?._id)
      }
    },[status])
 console.log(product , selectProduct);

  useEffect(()=>{
    if(status.deleteProduct === 'success') navigate(`/shop/${shopId}`)
     return()=>{
       dispatch(resetStatus())
    } 
  } , [status.deleteProduct])

  useEffect(() => {
    // console.log(user);
    console.log(user?.user?._id , product?.shopRef?.owner);
 
      if ( user?.isRoleShopOwner && user?.user?._id === product?.shopRef?.owner ) {
        setIsOwner(true);
      }
    
  }, [user?.status , status]);


 const deleteProductHandler=(e)=>{
   e.preventDefault();
   dispatch(deleteProduct(productId))
   
 }
 const editProductHandler=(e)=>{
   e.preventDefault();
   navigate(`/shop/product/edit/${productId}`)
  //  dispatch(editProduct(productId))
 }

  return (
    <>
      <div className="product_container main">
        <div className="img_container">
          <img src={product?.productImage?.url} alt="" />
        </div>
        <div className="product_info">
          <h2>{product?.productName}</h2>
          <p>{product?._id}</p>
          <p>{product?.totalPrice} <del> {product?.price} </del> <sup> {product?.discount}%</sup> </p>
          <p>discount : {product?.discount}%</p>
          <p>Stock : {product?.stock}</p>
          <p>{product?.description}</p>
          {
            user?.isRoleShopOwner && user?.user?._id === product?.shopRef?.owner ?(<div className='product_buttons'><button className='delete_product' onClick={deleteProductHandler}> delete</button>
            <button className='edit_product' onClick={editProductHandler}> Edit </button></div>):""
          }
          
        </div>

        <div className='shop_info2'>
          <h4> Shop Info</h4>
          <img src={product?.shopRef?.shopImage?.url} alt="" />
          <p>{product?.shopRef?.shopName}</p>
         {
          product?.shopRef?.customerCareNumber?.map((ele , index)=>{
            return(<a href={`tel:${ele}`} key={index}>{ele}</a>)
          })
         }
        </div>
      </div>
    
    </>
  )
}

export default ProductDetails