import { createAsyncThunk } from "@reduxjs/toolkit";
import { baseUrl } from "../../App";
import API from "../../utils/axiosConfig";


export const logInUser = createAsyncThunk("user/logInUser" , async(data)=>{

  try {
    console.log(data);
    const user = await API.post(`${baseUrl}/api/user/google/signup` , data ,{
				headers:{
					"Content-Type":"application/json"
				},
				withCredentials:true
			})
      console.log(user);
      return user.data        
  } catch (error) {
     console.log(error);
  }
})


export const authUser = createAsyncThunk("user/authUser" , async()=>{
  
    const { data } = await API.get(`${baseUrl}/api/user/profile`, {
        headers: { Content_type: "application/json" },
        withCredentials: true,
      });
      console.log(data);
    return data        
})


export const logoutUser = createAsyncThunk("user/logoutUser" , async()=>{
    const { data } = await API.get(`${baseUrl}/api/user/logout`, {
        headers: {
          Content_type: "application/json",
        },
        withCredentials: true,
      });
    return data        
})