import React, { useEffect, useState } from "react";

import "./shopPage.scss";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectShop } from "../../redux/shop/shopController";

import { Rate } from "antd";
import { FaLeaf } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import ProductPage from "../product/ProductPage";
import AddProduct from "../product/components/addProduct/AddProduct";
import AddReting from "./componets/AddReting";
import ProductCard from "../product/components/ProductCard";

function ShopPage() {
  const [shop, setShop] = useState({});
  const [isOwner, setIsOwner] = useState(false);
  const [isAddFeedback, setIsAddFeedback] = useState(false);
  const [isAddProduct, setIsAddProduct] = useState(false);
  const { id } = useParams();
  console.log(id);
  const dispatch = useDispatch();
  const { selectedShop, status } = useSelector((state) => state.shop);
  const product = useSelector((state) => state.product);
  const user = useSelector((state) => state.user);

  // console.log("is Shop Owner ", isOwner);

  useEffect(() => {
    dispatch(selectShop(id));
  }, [product.status]);

  useEffect(() => {
    if (status.selectShop || product.status === "success") {
      // console.log('ok' , selectedShop);
      setShop(selectedShop);
    }
  }, [status , product.status]);

  useEffect(() => {
    // console.log(user);
    if (user?.status.authUser === "success") {
      if (user?.isShopOwner) {
        setIsOwner(true);
      }
    }
  }, [user?.status]);

  console.log(shop);

  return (
    <>
      <div className="shop_details_page">
        <div className="shop_image_container">
          <img src={shop?.shopImage?.url} />
        </div>

        <div className="info_container">
          <div className="shop_details">
            <div className="name">
              <h2>{shop?.shopName}</h2>
              <p>{shop?._id}</p>
            </div>
            <div className="rating">
              <Rate count={5} value={shop?.ratings || 0} allowHalf disabled />
              {/* <span>{shop?.review} </span>  */}
            </div>

            <div className="location">
              <FaLocationDot /> {shop?.location?.country}
              <p>{shop?.location?.pin}</p>
              {shop?.location?.city?.map((cityName, index) => {
                return <span key={index}>{cityName} ,</span>;
              })}
            </div>

            <div className="product_list">
              {shop?.products?.map((product) => {
                return (
                  <Link key={product._id} to={`/shop/product/${product._id}`}>
               
                    <ProductCard
                      image={product?.productImage?.url}
                      productName={product.productName}
                      price={product.price}
                      discount ={product.discount}
                      stock = {product.stock}
                      id={product._id}
                    />
               </Link>
                );
              })}
            </div>

            {isOwner ? (
              <button
                className="add_product"
                onClick={() => setIsAddProduct(!isAddProduct)}
              >
                {isAddProduct ? "Hide form " : "Add product"}
              </button>
            ) : (
              ""
            )}
            {isOwner && isAddProduct ? <AddProduct shopRef={shop?._id} /> : ""}
            <button
              className="add_feedback"
              onClick={() => setIsAddFeedback(!isAddFeedback)}
            >
              {isAddFeedback ? "Hide  Feedback" : "Add Feedback "}
            </button>
            {isAddFeedback ? <AddReting shopId={shop?._id} /> : ""}
          </div>
        </div>
      </div>
      <div className="review_container">
        {
          shop?.reviews?.map((review)=>{
             return(
              <div className="review" key={review._id}>
               <div className="user-info">
                <img src={review.user?.profilePic} alt="" />
                <p>{ review.user?.name} </p>
               </div>
               <div>
                  <div className="ratting">
                    <Rate count={5} value={review.rating} allowHalf disabled />
                  </div>
                  <p>
                    {review.message}
                  </p>
               </div>
            </div>
             )
          })
        }
      </div>
    </>
  );
}

export default ShopPage;
