import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../utils/axiosConfig";
import { baseUrl } from "../../App";


export const createShop = createAsyncThunk('shop/createShop' , async(shopName)=>{
       console.log(shopName);
    try {
     
        const {data } = await API.post(`${baseUrl}/api/shop/create` , {shopName } ,
            {
                headers:{ 'Content-Type':'multipart/form-data'},
                withCredentials:true
            }
        )
        return data

    } catch (error) {
        console.log(error);
    }

})