import React, { useEffect, useState } from "react";

import "./shopPage.scss";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteShop, selectShop } from "../../redux/shop/shopController";

import demoImage from './componets/addShop/shop.png'

import { Rate } from "antd";
import {
  FaCity,
  FaComments,
  FaEdit,
  FaEnvelope,
  FaFlag,
  FaLeaf,
  FaMapPin,
  FaMinus,
  FaPhoneAlt,
  FaPlus,
  FaTrash,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import ProductPage from "../product/ProductPage";
import AddProduct from "../product/components/addProduct/AddProduct";
import AddReting from "./componets/AddReting";
import ProductCard from "../product/components/ProductCard";
import { resetDeleteStatus } from "../../redux/shop/shopSlice";

function ShopPage() {
  const [shop, setShop] = useState({});
  // const [isOwner, setIsOwner] = useState(false);
  const [isAddFeedback, setIsAddFeedback] = useState(false);
  const [isAddProduct, setIsAddProduct] = useState(false);
  const { id } = useParams();
  console.log(id);
  const dispatch = useDispatch();
  const { selectedShop, status } = useSelector((state) => state.shop);
  const product = useSelector((state) => state.product);
  const user = useSelector((state) => state.user);

  const navigate = useNavigate();
  // console.log("is Shop Owner ", isOwner);

  useEffect(() => {
    dispatch(selectShop(id));
    if (product.status?.createProduct === "success") setIsAddProduct(false);
  }, [product.status]);

  useEffect(() => {
    if (status.selectShop || product.status === "success") {
      // console.log('ok' , selectedShop);
      setShop(selectedShop);
    }
    return () => {
      dispatch(resetDeleteStatus());
    };
  }, [status, product.status]);

 
  // console.log("user id" ,shop?._id , user?.user?._id === shop?.owner?._id );
//  console.log("is owner" , isOwner);
  const deleteShopHandler = (e) => {
    e.preventDefault();
    dispatch(deleteShop(shop?._id));
  };
  useEffect(() => {
    if (status.deleteShop === "success") {
      navigate("/product");
    }
  }, [status.deleteShop]);

  console.log(shop);

  return (
    <>
      <div className="shop_details_page">
        <div className="shop_image_container">
          <img src={shop?.shopImage?.url || demoImage } />
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

            <div className="owner_details">
              <div className="owner_image">
                <img src={shop?.owner?.profilePic} alt="" />
              </div>
              <div className="owner_info">
                <h3>{shop?.owner?.name}</h3>
                <p>{shop?.owner?.email}</p>
              </div>
            </div>

            <div className="location">
              <div className="location-item">
                <FaFlag className="icon" />
                {shop?.location?.country}
              </div>
              <div className="location-item">
                <FaMapPin className="icon" />
                <p>{shop?.location?.pin}</p>
              </div>
              <div className="location-item">
                <FaCity className="icon" />
                {shop?.location?.city?.map((cityName, index) => (
                  <span key={index}>{cityName}</span>
                ))}
              </div>
            </div>

            <div className="customerCareNumbers">
              <h3>Customer Support</h3>
              {shop?.customerCareNumber?.map((number, index) => (
                <div key={index} className="number">
                  <FaPhoneAlt className="icon" />
                  <a href={`tel:${number}`} className="contact-link">
                    {number}
                  </a>
                </div>
              ))}
              <div className="email">
                <FaEnvelope className="icon" />
                <a
                  href={`mailto:${shop?.owner?.email}`}
                  className="contact-link"
                >
                  {shop?.owner?.email}
                </a>
              </div>
            </div>

            {user?.isRoleShopOwner && user?.user?._id === shop?.owner?._id? (<div className="buttons">
              <button className="delete" onClick={deleteShopHandler}>
                <FaTrash className="icon" /> Delete
              </button>
              <button
                className="edit"
                onClick={() => navigate(`/shop/edit/${shop?._id}`)}
              >
                <FaEdit className="icon" /> Edit
              </button>
            </div>):"" }
            
          </div>
        </div>
      </div>

      <div className="product_list">
        {shop?.products?.map((product) => {
          return (
            <Link key={product._id} to={`/shop/product/${product._id}`}>
              <ProductCard
                image={product?.productImage?.url}
                productName={product.productName}
                price={product.price}
                discount={product.discount}
                stock={product.stock}
                id={product._id}
              />
            </Link>
          );
        })}
      </div>

      <div className="buttons2">
        { user?.isRoleShopOwner && user?.user?._id === shop?.owner?._id && (
          <button
            className="add_product"
            onClick={() => {
              setIsAddFeedback(false);
              setIsAddProduct(!isAddProduct);
            }}
          >
            {isAddProduct ? (
              <>
                <FaMinus className="icon" /> Hide form
              </>
            ) : (
              <>
                <FaPlus className="icon" /> Add product
              </>
            )}
          </button>
        )}
        {user?.isRoleShopOwner && user?.user?._id === shop?.owner?._id && isAddProduct &&  <AddProduct shopRef={shop?._id} />}
        <button
          className="add_feedback"
          onClick={() => {
            setIsAddFeedback(!isAddFeedback);
            setIsAddProduct(false);
          }}
        >
          {isAddFeedback ? (
            <>
              <FaMinus className="icon" /> Hide Feedback
            </>
          ) : (
            <>
              <FaComments className="icon" /> Add Feedback
            </>
          )}
        </button>
        {isAddFeedback && <AddReting shopId={shop?._id} />}
      </div>

      <div className="review_container">
        {shop?.reviews?.map((review) => {
          return (
            <div className="review" key={review._id}>
              <div className="user-info">
                <img src={review.user?.profilePic} alt="" />
                <p>{review.user?.name} </p>
              </div>
              <div>
                <div className="ratting">
                  <Rate count={5} value={review.rating} allowHalf disabled />
                </div>
                <p>{review.message}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default ShopPage;
