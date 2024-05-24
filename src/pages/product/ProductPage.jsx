import React, { useState } from 'react'

import './productPage.scss'
import { FaSearchDollar } from "react-icons/fa";
import { FaSearchLocation } from "react-icons/fa";
import { useSelector } from 'react-redux';
import Shop from '../shop/componets/Shop';

function ProductPage() {
   const [product , setProduct]= useState("")  // state variable 
   const [location , setLocation] = useState("")
   const { shop } = useSelector(state=>state.shop)

   const hendleSubmit =(e)=>{
    e.preventDefault();
    const data ={ product , location}
      
   }

  return (
    <div>
        <div className='search_container'>
          <form action="" className='search_form' >

            <input className='search' 
             type="text" 
             placeholder='Search Products...'
             value={product}
             onChange={(e)=>{setProduct(e.target.value)}}
              />

            <select name="location" id="" onChange={(e)=>setLocation(e.target.value)} >
                <option value="">Select Location </option>
                <option value="panskura"> Panskura</option>
                <option value="mechogram"> Mechogram</option>
                <option value="mecheda"> Mecheda </option>
                <option value="kgp"> KGP </option>
            </select>
            <button type='submit' onClick={hendleSubmit}> <FaSearchLocation/> </button>
          </form>
        </div>
        <div className='shop_container'>
           {
            shop?.map((ele)=>{
              return(  <div className='shop_cart' key={ele._id}>
              <Shop name={ele.shopName} id={ele._id} rating={''} location={ele.location.pin} img={ele.shopImage?.url} />
            </div>
          )}
        )
           
        } 
        </div>
    </div>
  )
}

export default ProductPage