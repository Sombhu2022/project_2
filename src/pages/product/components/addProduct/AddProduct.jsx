import React, { useState } from "react";
import { IoCloudUploadSharp } from "react-icons/io5";
// import "./addShop.scss";

import productImage from "./product.svg";

import { useDispatch, useSelector } from "react-redux";

// import axios from 'axios'

import { FaImage } from "react-icons/fa6";
import { createProduct } from "../../../../redux/product/productController";

import Loader from 'react-js-loader'

function AddProduct({shopRef}) {
  
  const [images, setImages] = useState();
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [stock, setStock] = useState("");
  const [discount, setDiscount] = useState(0);

  const dispatch = useDispatch()
 const { status } = useSelector(state=> state.product)
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
    const discountAmmount = (price * discount) / 100;
    const actualPrice = price - discountAmmount;
    console.log(actualPrice);
    const myForm = new FormData();

    myForm.set("productName", productName);
    myForm.set("price", price);
    myForm.set("description", description);
    myForm.set("stock", stock);
    myForm.set("discount", discount);
    myForm.set("totalPrice", actualPrice);
    myForm.set("shopRef" , shopRef)
    myForm.append("productImage", images);


    dispatch(createProduct(myForm));
  };

  return (
    <div className="add_product_container">
      <div className="form_container">
        <form action="" className="form">
          <label className="primary_input label" htmlFor="file">
            <div className="img-container">
              <img src={images ? images : productImage} alt="important document" />
            </div>
            <div className="img-input">
              <p>
                <FaImage />
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
            placeholder="Product Name"
            onChange={(e) => setProductName(e.target.value)}
          />
          <input
            type="number"
            name="price"
            id=""
            placeholder="Product Pricse"
            onChange={(e) => setPrice(e.target.value)}
          />
          <input
            type="number"
            name="discount"
            id=""
            placeholder="Product discount"
            onChange={(e) => setDiscount(e.target.value)}
          />
          <input
            type="number"
            name="stock"
            id=""
            placeholder="Total Stock"
            onChange={(e) => setStock(e.target.value)}
          />

          <textarea
            type="text"
            name="descreption"
            id=""
            placeholder="Product Descreption"
            onChange={(e) => setDescription(e.target.value)}
          />

          <button type="submit" onClick={handleSubmit}>
            Add Product
            {status?.createProduct === "pending" ? (
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

export default AddProduct;
