import React, { useState } from 'react'
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
import { useDispatch } from 'react-redux';
import { logInUser } from '../../../redux/user/userController';

function Login() {
  const [profilePic , setProfilePic ] = useState('')
  const [name , setName] = useState('')
  const [email , setEmail]=useState('')
  const [role , setRole] = useState('user')
  const dispatch = useDispatch();


  const loginHandle =(encodeData)=>{
      const data = jwtDecode(encodeData.credential)
      if(data){
        setName(data.name)
        setEmail(data.email)
        setProfilePic(data?.picture)
      }
      // console.log(data.email , data.name , data.picture);
     dispatch(logInUser({name , email , profilePic , role}))
  }

console.log(role);  
  return (
    <div>
      <h1>Login with Google</h1>
     

    <input type='checkbox' onChange={(e)=>setRole(e.target.checked ? 'shopOwner' : 'user')} /> log in as shop owner
<GoogleLogin
  onSuccess={ loginHandle }
  onError={() => {
    console.log('Login Failed');
  }}
/>  
    </div>
  )
}

export default Login