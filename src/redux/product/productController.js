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

export const deleteProduct = createAsyncThunk('product/fetchProductByProductId' , async(productId)=>{
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

export const editProduct = createAsyncThunk('product/fetchProductByProductId' , async(productId)=>{
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