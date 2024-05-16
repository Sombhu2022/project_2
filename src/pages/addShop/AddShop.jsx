import React, { useState } from "react";
import { IoCloudUploadSharp } from "react-icons/io5";
import "./addShop.scss";

import shopImage from "./shop.png";

// import { useDispatch } from "react-redux";

// import axios from 'axios'

import { FaShop } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { createShop } from "../../redux/shop/shopController";

function AddShop() {
  const [images, setImages] = useState();
  const [name, setName] = useState("");
  const [pin , setPin] = useState(0);
  const [country , setCountry] = useState("");
  const [city , setCity] = useState("");
  
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
    myForm.set('city' , city)
    myForm.set("country" , country) 

    // console.log("this is my form", myForm);
    
     dispatch(createShop({shopName:name}))
  };

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
          <input
            type="text"
            name="city"
            id=""
            placeholder="City Name"
            onChange={(e) => setCity(e.target.value)}
          />
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
            Add Shop <IoCloudUploadSharp />
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddShop;
