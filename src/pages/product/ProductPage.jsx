import React, { useEffect, useState } from 'react'

import './productPage.scss'
import { FaSearchDollar } from "react-icons/fa";
import { FaSearchLocation } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import Shop from '../shop/componets/Shop';
import SearchShop from './components/searchShop/SearchShop';
import { fetchAllShop } from '../../redux/shop/shopController';

function ProductPage() {
   const [product , setProduct]= useState("")  // state variable 
   const [location , setLocation] = useState("")
   const { shop } = useSelector(state=>state.shop)

   const dispatch = useDispatch()
   
   useEffect(()=>{
    dispatch(fetchAllShop())
   },[])

   const hendleSubmit =(e)=>{
    e.preventDefault();
    const data ={ product , location}
      
   }
 console.log("shop",shop);
  return (
    <div className='main'>
       <SearchShop/>
        <div className='shop_container'>
           {
            shop?.map((ele)=>{
              return(  <div className='shop_cart' key={ele._id}>
              <Shop name={ele.shopName} id={ele._id} rating={ele.ratings} location={ele.location.city} img={ele.shopImage?.url} />
            </div>
          )}
        )
           
        } 
        </div>
    </div>
  )
}

export default ProductPage