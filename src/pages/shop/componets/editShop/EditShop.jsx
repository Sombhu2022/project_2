import React, { useEffect, useState } from "react";
import { IoCloudUploadSharp } from "react-icons/io5";
import shopImage from '../addShop/shop.png'


import { TiDeleteOutline } from "react-icons/ti";
// import { useDispatch } from "react-redux";

// import axios from 'axios'

import { FaShop } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { selectShop, updateShopDetails, updateShopLogo } from "../../../../redux/shop/shopController";
import { useParams } from "react-router-dom";

import Loader from 'react-js-loader'

function EditShop() {
  const [images, setImages] = useState();
  const [name, setName] = useState("");
  const [pin , setPin] = useState(0);
  const [country , setCountry] = useState("");
  const [allCity, setAllCity] = useState(['']);
  const [city , setCity]=useState('')
  const [number , setNumber] = useState()
  const [numbers , setNumbers] = useState([''])

  const  {selectedShop , status} = useSelector((state)=>state.shop)
 const {shopId} = useParams()
  
  const dispatch = useDispatch()


  useEffect(() => {
    if (shopId ) {
      dispatch(selectShop(shopId));
    }
  }, [dispatch, shopId]);

  useEffect(() => {
    if (status.selectShop === "success" && selectedShop) {
      setImages(selectedShop.shopImage?.url)
      setName(selectedShop.shopName)
      setAllCity(selectedShop.location?.city)
      setCountry(selectedShop.location?.country)
      setPin(selectedShop.location?.pin)
      setNumbers(selectedShop?.customerCareNumber)
    }
  }, [ selectedShop ]);


  const fileHandle = (e) => {
    const file = e.target.files[0];

    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setImages(reader.result);
      }
    };
    reader.readAsDataURL(file);
  };


  const handleImageSubmit =(e)=>{
    e.preventDefault();
    const myFrom = new FormData()
    myFrom.append("shopImage" , images)
    dispatch(updateShopLogo({shopId , shopImage:myFrom}))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const myForm = new FormData();

    myForm.set("shopName", name);
    myForm.set("pin" , pin)
    allCity.forEach((ele)=> { if(ele) myForm.append('city' , ele) })
    numbers.forEach((ele)=> { if(ele) myForm.append('customerCareNumber' , ele) })
    myForm.set("country" , country) 
    
     dispatch(updateShopDetails({shopId , myForm}))
  };

  const  addallCity=(e) => {
		e.preventDefault();
    const isPresent = allCity.includes(city)
		if(isPresent) return
    setAllCity([...allCity , city])
    setCity('')
	};

  const deleteallCity=(id)=>{
    const updateallCity = allCity.filter((ele , index)=> index !== id )
    setAllCity(updateallCity)
  }
  const  addnumbers=(e) => {
		e.preventDefault();
    const isPresent = numbers.includes(number)
		if(isPresent) return
    setNumbers([...numbers , number])
    setNumber('')
	};

  const deleteNumbers=(id)=>{
    const updateNumbers = numbers.filter((ele , index)=> index !== id )
    setNumbers(updateNumbers)
  }

  console.log(allCity , city);
  console.log(number , numbers);
  return (
    <div className="add_shop_container">
      <div className="form_container">
        <h3> Update Shop image </h3>

        <form action="" className="form">

          <label className="primary_input label" htmlFor="file">
            <div className="img-container">
            {status.updateShopLogo === "pending" ? (
                <Loader type={"spinner-circle"} bgColor={'green'}  color={"green"} size={80} />
              ) : (
                <img src={images ? images : ""} alt="important document" />
              )}
            </div>
            <div className="img-input">
              <p>
                <FaShop />
              </p>
              <b style={{ color: "#CB3CFF" }}>Click to upload image</b> svg, jpg
              , jpeg or gif file .
            </div>
          </label>

          <input
            type="file"
            name="images"
            id="file"
            style={{ display: "none" }}
            accept="image/*"
            onChange={fileHandle}
          />

          <button type="submit" onClick={handleImageSubmit}>
            Update Image  
            {status.updateShopLogo === "pending" ? (
                <Loader type={"spinner-circle"} bgColor={'white'}  color={"green"} size={40} />
              ) : (
                <IoCloudUploadSharp />
              )}
          </button>  
						

        </form>

       <h3>
        Update Shop Details
       </h3>

        <form action="" className="form">
          <input
            type="text"
            name="name"
            id=""
            value={name}
            placeholder="Shop Name"
            onChange={(e) => setName(e.target.value)}
          />
         
          {
             allCity?.map((ele, index)=>{
              if(!ele) return
              return( <span key={index} className="filter-item" onClick={()=>deleteallCity(index)}>
                {ele} 
                  <TiDeleteOutline />
                  </span> 
              )
            })
          }
		
									<input
                    // key={index}
										type='text'
										value={city}
										name='City'
										required
										onChange={(e) =>  setCity(e.target.value)}
										placeholder='City Name'
										// className='h-9 rounded-md border-purple-300 border px-2 outline-none focus:outline-none mb-2 w-[70%]'
									/>
							<button
                className="add-city-button"
								onClick={addallCity}
							>
								Add City
							</button>
          {
             numbers?.map((ele, index)=>{
              if(!ele) return
              return( <span key={index} className="filter-item" onClick={()=>deleteNumbers(index)}>
                {ele} 
                  <TiDeleteOutline />
                  </span> 
              )
            })
          }
		
									<input
                    // key={index}
										type='number'
										value={number}
										name='Customer Care Number'
										required
										onChange={(e) =>  setNumber(e.target.value)}
										placeholder='Customer Care Number'
                    max={10}
										// className='h-9 rounded-md border-purple-300 border px-2 outline-none focus:outline-none mb-2 w-[70%]'
									/>

							<button
                className="add-city-button"
								onClick={addnumbers}
							>
								Add number
							</button>
						

          <div className="pin_and_country">

          <input
            type="number"
            name="pin"
            id=""
            value={pin}
            placeholder="Pin Code"
            onChange={(e) => setPin(e.target.value)}
          />
          <input
            type="text"
            name="country"
            id=""
            value={country}
            placeholder="Country Name"
            onChange={(e) => setCountry(e.target.value)}
          />
          </div>
        

          <button type="submit" onClick={handleSubmit}>
            Update Shop  
             {status.updateShopDetails === "pending" ? (
                <Loader type={"spinner-circle"} bgColor={'white'}  color={"green"} size={40} />
              ) : (
                <IoCloudUploadSharp />
              )}
          </button>
        </form>
      </div>
    </div>
  );
}

export default EditShop;
