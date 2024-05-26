import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../utils/axiosConfig";
import { baseUrl } from "../../App";


export const createShop = createAsyncThunk('shop/createShop' , async(fromData)=>{
       console.log(fromData);
    try {
     
        const {data } = await API.post(`${baseUrl}/api/shop/create` , fromData ,
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

export const fetchAllShop = createAsyncThunk('shop/fetchAllShop' , async()=>{
     
    try {
     
        const {data } = await API.get(`${baseUrl}/api/shop/` ,
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


export const selectShop = createAsyncThunk('shop/selectShop' , async(id)=>{
     
    try {
     
        const {data } = await API.get(`${baseUrl}/api/shop/${id}` ,
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

export const postShopReview = createAsyncThunk('shop/postShopReview' , async({shopId , rating , message})=>{
     
    console.log(" ok data are here",shopId , rating , message);
    try {
        const {data } = await API.post(`${baseUrl}/api/shop/review/${shopId}` ,
                    { rating , message},
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

export const deleteShop = createAsyncThunk('shop/deleteShop' , async(shopId )=>{
     
    console.log(" ok data are here",shopId );
    try {
        const {data } = await API.delete(`${baseUrl}/api/shop/${shopId}` ,
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


export const updateShopDetails = createAsyncThunk('shop/updateShopDetails' , async( {shopId , myForm})=>{
     console.log(shopId , myForm);
    try {
        const {data } = await API.patch(`${baseUrl}/api/shop/${shopId}` ,myForm,
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


export const updateShopLogo = createAsyncThunk('shop/updateShopLogo' , async({ shopId , shopImage} )=>{
     
    console.log(" ok data are here",shopId );
    try {
        const {data } = await API.patch(`${baseUrl}/api/shop/logo/${shopId}` , shopImage,
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
