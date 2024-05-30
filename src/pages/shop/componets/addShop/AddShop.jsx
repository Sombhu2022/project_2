import React, { useState } from "react";
import { IoCloudUploadSharp } from "react-icons/io5";
import "./addShop.scss";

import shopImage from "./shop.png";

import { TiDeleteOutline } from "react-icons/ti";
// import { useDispatch } from "react-redux";

// import axios from 'axios'

import { FaShop } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { createShop } from "../../../../redux/shop/shopController";

import Loader from 'react-js-loader'


function AddShop() {
  const [images, setImages] = useState();
  const [name, setName] = useState("");
  const [pin , setPin] = useState(0);
  const [country , setCountry] = useState("");
  // const [state , setState] = useState("");
  const [allCity, setAllCity] = useState(['']);
  const [city , setCity]=useState('')
  const [number , setNumber] = useState()
  const [numbers , setNumbers] = useState([''])

  const  shop  = useSelector((state)=>state.shop)
 console.log(shop);
 const { status } = useSelector(state=> state.shop)
  
  const dispatch = useDispatch()

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

  const handleSubmit = (e) => {
    e.preventDefault();
    const myForm = new FormData();

    myForm.set("shopName", name);
    myForm.append('shopImage' , images)
    myForm.set("pin" , pin)
    // myForm.set('state' , state)
    allCity.forEach((ele)=> { if(ele) myForm.append('city' , ele) })
    numbers.forEach((ele)=> { if(ele) myForm.append('customerCareNumber' , ele) })
    myForm.set("country" , country) 
    

    // console.log("this is my form", myForm);
    
     dispatch(createShop(myForm))
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
        <form action="" className="form">
          <label className="primary_input label" htmlFor="file">
            <div className="img-container">
              <img src={images?images:shopImage} alt="important document" />
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
          <input
            type="text"
            name="name"
            id=""
            placeholder="Shop Name"
            onChange={(e) => setName(e.target.value)}
          />
          {/* <input
            type="text"
            name="state"
            id=""
            placeholder="State Name"
            onChange={(e) => setState(e.target.value)}
          /> */}
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
										placeholder='Castomer Care Numbers'
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
            placeholder="Pin Code"
            onChange={(e) => setPin(e.target.value)}
          />
          <input
            type="text"
            name="country"
            id=""
            placeholder="Country Name"
            onChange={(e) => setCountry(e.target.value)}
          />
          </div>
        

          <button type="submit" onClick={handleSubmit}>
            Add Shop 
            {status.addShop === "pending" ? (
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

export default AddShop;
