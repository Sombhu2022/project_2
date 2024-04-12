import React, { useState } from 'react'

import './shopPage.scss'
import { FaSearchDollar } from "react-icons/fa";
import { FaSearchLocation } from "react-icons/fa";

function ShopPage() {
   const [product , setProduct]= useState("")  // state variable 
   const [location , setLocation] = useState("")

   
   const hendleSubmit =(e)=>{
    e.preventDefault();
    const data ={ product , location}

   }
  return (
    <div>
        <div className='search_container'>
          <form action="" className='form' >

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

        </div>
    </div>
  )
}

export default ShopPage