import React, { useEffect, useState } from "react";
import { IoCloudUploadSharp } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { FaImage } from "react-icons/fa6";
import { useParams } from "react-router-dom";
import "./editProduct.scss";
import {
  fetchProductByProductId,
  updateProductDetails,
  updateProductImage,
} from "../../../../redux/product/productController";
import {
  resetStatus,
  resetUpdateStatus,
} from "../../../../redux/product/productSlice";

import Loader from "react-js-loader";

function EditProduct() {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const [images, setImages] = useState();
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [stock, setStock] = useState("");
  const [discount, setDiscount] = useState(0);
  const { selectProduct, status } = useSelector((state) => state.product);

  useEffect(() => {
    if (productId ) {
      dispatch(fetchProductByProductId(productId));
    }
  }, [dispatch, productId]);

  useEffect(() => {
    if (status.fetchProduct === "success" && selectProduct) {
      setImages(selectProduct.productImage?.url);
      setProductName(selectProduct?.productName);
      setPrice(selectProduct?.price);
      setDescription(selectProduct?.description);
      setDiscount(selectProduct?.discount);
      setStock(selectProduct?.stock);
    }
  }, [ selectProduct ]);

  useEffect(() => {
    return () => {
      dispatch(resetStatus());
      dispatch(resetUpdateStatus());
    };
  }, [dispatch]);

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

  const handleFileSubmit = (e) => {
    e.preventDefault();
    dispatch(updateProductImage({ productId, productImage: images }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const discountAmmount = (price * discount) / 100;
    const actualPrice = price - discountAmmount;
    // const myForm = new FormData();

    // myForm.set("productName", productName);
    // myForm.set("price", price);
    // myForm.set("description", description);
    // myForm.set("stock", stock);
    // myForm.set("discount", discount);
    // myForm.set("totalPrice", actualPrice);
    const data ={
      productName,
      productId,
      price,
      discount,
      description,
      stock,
      totalPrice:actualPrice
    }

    dispatch(updateProductDetails(data))

  };

  if (status.fetchProduct === "loading") {
    return <div>Loading...</div>;
  }

  if (status.fetchProduct === "error") {
    return <div>Error fetching product details.</div>;
  }

  return (
    <div className="add_product_container">
      <div className="form_container">
        <h3>Edit Product Image</h3>

        <form className="form">
          <label className="primary_input label" htmlFor="file">
            <div className="img-container">
              {status.updateProductImage === "pending" ? (
                <Loader type={"spinner-circle"} bgColor={'green'}  color={"green"} size={80} />
              ) : (
                <img src={images ? images : ""} alt="important document" />
              )}
            </div>
            <div className="img-input">
              <p>
                <FaImage />
              </p>
              <b style={{ color: "#CB3CFF" }}>Click to upload image</b> svg,
              jpg, jpeg, or gif file.
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
          <button type="submit" onClick={handleFileSubmit}>
            Change Image <IoCloudUploadSharp />
          </button>
        </form>

        <h3>Edit Product Details</h3>
        <form action="" className="form" onSubmit={handleSubmit}>
          <p>Product Name</p>
          <input
            type="text"
            name="name"
            value={productName}
            placeholder="Product Name"
            onChange={(e) => setProductName(e.target.value)}
          />
          <p>Price</p>
          <input
            type="number"
            name="price"
            value={price}
            placeholder="Product Price"
            onChange={(e) => setPrice(e.target.value)}
          />
          <p>Discount</p>
          <input
            type="number"
            name="discount"
            placeholder="Product Discount"
            value={discount}
            onChange={(e) => setDiscount(e.target.value)}
          />
          <p>Stock</p>
          <input
            type="number"
            name="stock"
            placeholder="Total Stock"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
          />
          <p>Description</p>
          <textarea
            type="text"
            name="description"
            placeholder="Product Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <button type="submit">
            Update Product 
            {status.updateProductDetails === "pending" ? (
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

export default EditProduct;
