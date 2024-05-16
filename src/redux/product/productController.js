import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../utils/axiosConfig";


export const createProduct = createAsyncThunk('product/createProduct' , async({productName , price})=>{
  
    console.log(productName , price);
    const { data } = API.post('http://localhost:8080/api/product/create' ,  {productName , price} ,
        {
            headers: { "Content-Type": "multipart/form-data", },
            withCredentials: true
        },
    )
    return data
})

export const fetchAllProducts = createAsyncThunk('product/fetchAllProducts' , async()=>{
    const { data } = API.get('/api/')
})