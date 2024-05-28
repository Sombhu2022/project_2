import React, { useEffect, useState } from 'react'

import './searchShop.scss'
import { useDispatch, useSelector } from 'react-redux'
import { FaSearchLocation } from 'react-icons/fa'
import { fetchShopByProductNameOrCity, fetchShopByShopName } from '../../../../redux/shop/shopController'

function SearchShop() {
    const [productName , setProductName]= useState("")  // state variable 
   const [city , setCity] = useState("")
   const [shopName , setShopName] = useState('')
   const [isShopForm , setIsShopForm ]=useState(false)
   const [allCity , setAllCity ] = useState([])
   const { shop , status} = useSelector(state=>state.shop)
   const  dispatch = useDispatch()

   const handleSubmit =(e)=>{
    e.preventDefault();
    console.log(productName , city); 
      dispatch(fetchShopByProductNameOrCity({productName , city}))
   }

 const handleShopNameSubmit =(e)=>{
        e.preventDefault();
        dispatch(fetchShopByShopName(shopName))
 }

 console.log("shop",shop);
 useEffect(() => {
    if (shop) {
      const cities = new Set(allCity); 
      shop.forEach(ele => {
        ele.location.city.forEach(city => {
          cities.add(city);
        });
      });
      setAllCity([...cities]); 
    }
  }, [shop, status]); 
 console.log("all city",allCity);


  return (
    <div className="search_container">
    <div className="toggle_buttons">
      <span onClick={() => setIsShopForm(false)} className={!isShopForm ? 'active' : ''}>
        Search by product Name
      </span>
      <span onClick={() => setIsShopForm(true)} className={isShopForm ? 'active' : ''}>
        Search by Shop Name
      </span>
    </div>
    {isShopForm ? (
      <form className="search_form" onSubmit={handleShopNameSubmit}>
        <input
          className="search"
          type="text"
          placeholder="Search Shops..."
          value={shopName}
          onChange={(e) => setShopName(e.target.value)}
        />
        <button type="submit" disabled={!shopName? true:false}>
          <FaSearchLocation className="icon" />
        </button>
      </form>
    ) : (
      <form className="search_form" onSubmit={handleSubmit}>
        <input
          className="search"
          type="text"
          placeholder="Search product..."
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />
        <select name="location" onChange={(e) => setCity(e.target.value)}>
          <option value="">Select Location</option>
          {
            allCity?.map((city , index)=>{
                return(
                    <option key={index} value={city}>
                        {city}
                    </option>
                )
            })
          }
        </select>
        <button type="submit" disabled={!productName && !city? true:false}>
          <FaSearchLocation className="icon" />
        </button>
      </form>
    )}
  </div>
  )
}

export default SearchShop