import React, { useState } from 'react'
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
import { useDispatch } from 'react-redux';
import { logInUser } from '../../../redux/user/userController';

function Login() {
  const [image , setImage ] = useState('')
  const [name , setName] = useState('')
  const [email , setEmail]=useState('')
  const dispatch = useDispatch();


  const loginHandle =(encodeData)=>{
      const data = jwtDecode(encodeData.credential)
      if(data){
        setName(data.name)
        setEmail(data.email)
        setImage(data?.picture)
      }
      // console.log(data.email , data.name , data.picture);
     dispatch(logInUser({name , email , image}))
  }

  return (
    <div>
      <h1>Login with Google</h1>
     

<GoogleLogin
  onSuccess={ loginHandle }
  onError={() => {
    console.log('Login Failed')
  }}
/>  
    </div>
  )
}

export default Login