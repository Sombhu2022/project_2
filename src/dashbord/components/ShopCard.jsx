// ShopCard.jsx
import React from 'react';
import { FaTrash } from 'react-icons/fa';
import './shopCard.scss'; // Import the CSS file
import { useDispatch } from 'react-redux';
import { deleteShop } from '../../redux/shop/shopController';

const ShopCard = ({ shop }) => {
   const dispatch = useDispatch()


    const deleteShopHandler = (id) => {
        // Implement delete shop functionality
        dispatch(deleteShop(id))
    };

    return (
        <div className='shop_card'>
            <img src={shop?.shopImage?.url} alt="Shop" />
            <div className='shop_info'>
                <p>{shop?.shopName}</p>
                <p>ID: {shop?._id}</p>
            </div>
            <div className="owner_details">
                <div className="owner_image">
                    <img src={shop?.owner?.profilePic} alt="Owner" />
                </div>
                <div className="owner_info">
                    <h3>{shop?.owner?.name}</h3>
                    <p>{shop?.owner?.email}</p>
                </div>
            </div>
            <button className="delete" onClick={()=>deleteShopHandler(shop?._id)}>
                <FaTrash className="icon" /> Delete
            </button>
        </div>
    );
};

export default ShopCard;
