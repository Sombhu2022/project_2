import React, { useState } from "react";
import { IoCloudUploadSharp } from "react-icons/io5";
// import "./addShop.scss";

import productImage from "./product.svg";

// import { useDispatch } from "react-redux";

// import axios from 'axios'

import { FaShop } from "react-icons/fa6";

function AddProduct() {
  const [imagePreview, setImagesPreview] = useState([]);
  const [images, setImages] = useState();
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [stock, setStock] = useState("");
  const [discount, setDiscount] = useState(0);

  // const dispatch = useDispatch()

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

    myForm.set("name", name);
    myForm.set("price", price);
    myForm.set("description", description);
    myForm.set("stock", stock);
    myForm.set("discount", discount);
    myForm.set("actualPrice", actualPrice);
    myForm.append("images", images);

    console.log("this is my form", myForm);

    // dispatch(addProduct(myForm));
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
            placeholder="Product Name"
            onChange={(e) => setName(e.target.value)}
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
            Add Product <IoCloudUploadSharp />
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddProduct;
