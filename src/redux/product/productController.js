import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../utils/axiosConfig";
import { baseUrl } from "../../App";


export const createProduct = createAsyncThunk('product/createProduct' , async(fromData)=>{
  
    console.log(fromData);
    const { data } = await API.post(`${baseUrl}/api/product/create` ,  fromData ,
        {
            headers: { "Content-Type": "multipart/form-data", },
            withCredentials: true
        },
    )
    // console.log("data --------->? ",data);
    return data
})

export const fetchAllProducts = createAsyncThunk('product/fetchAllProducts' , async({productId})=>{
    const { data } = await API.get('/api/')
})

export const fetchProductByProductId = createAsyncThunk('product/fetchProductByProductId' , async(productId)=>{
    console.log("pro id",productId);
    try {
        const {data} = await API.get(`${baseUrl}/api/product/${productId}` , {
            headers: { "Content-Type": "multipart/form-data", },
            withCredentials: true
        })
    
        return data
        
    } catch (error) {
       console.log(error); 
    }
})

export const deleteProduct = createAsyncThunk('product/deleteProduct' , async(productId)=>{
    console.log("pro id",productId);
    try {
        const {data} = await API.delete(`${baseUrl}/api/product/delete/${productId}` , {
            headers: { "Content-Type": "multipart/form-data", },
            withCredentials: true
        })
    
        return data
        
    } catch (error) {
       console.log(error); 
    }
})

export const updateProductDetails = createAsyncThunk('product/updateProductDetails' , async({
    productName,
    productId,
    price,
    discount,
    description,
    stock,
    totalPrice
  })=>{
    console.log("pro id",productId );
    try {
        const {data} = await API.patch(`${baseUrl}/api/product/update-details/${productId}` , {
            productName,
            price,
            discount,
            description,
            stock,
            totalPrice
          }, {
            headers: { "Content-Type": "multipart/form-data", },
            withCredentials: true
        })
    
        return data
        
    } catch (error) {
       console.log(error); 
    }
})


export const updateProductImage = createAsyncThunk('product/updateProductImage' , async({productId , productImage})=>{
    console.log("pro id",productId);
    try {
        const {data} = await API.patch(`${baseUrl}/api/product/update-picture/${productId}` ,{productImage}, {
            headers: { "Content-Type": "multipart/form-data", },
            withCredentials: true
        })
    
        return data
        
    } catch (error) {
       console.log(error); 
    }
})