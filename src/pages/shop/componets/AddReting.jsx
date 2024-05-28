import { Rate } from 'antd';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { postShopReview } from '../../../redux/shop/shopController';

function AddReting({shopId}) {
    const [rating , setRating] = useState(0);
    const [message , setMessage] = useState();

    const dispatch = useDispatch()

    const reviewHandle =async(e)=>{
        e.preventDefault();
        dispatch(postShopReview({shopId , rating , message}))
    }
  return (
    <div className="review " style={{  margin:"10px auto" , padding: "10px"}}>
    <h3> Review Section </h3>

    <form action="" className="form">
      <Rate count={5} value={rating} allowHalf onChange={(value)=>{setRating(value)}} />
      <textarea type="text" name="review" placeholder="Write your review" onChange={(e)=>setMessage(e.target.value)}/>
      <button type="submit" onClick={reviewHandle}>Send review</button>
    </form>
    
  </div>
  )
}

export default AddReting