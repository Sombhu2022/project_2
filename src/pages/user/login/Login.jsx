import React, { useEffect, useState } from 'react';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
import {jwtDecode} from 'jwt-decode';
import { useDispatch, useSelector } from 'react-redux';
import { logInUser } from '../../../redux/user/userController';

import logo from '../../../media/logo.png';
import './login.scss';
import { useNavigate } from 'react-router-dom';
import { resetUserStatus } from '../../../redux/user/userSlice';

function Login() {
  const [profilePic, setProfilePic] = useState();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [role, setRole] = useState('user');
  const dispatch = useDispatch();
  const { user , status }=useSelector(state => state.user)
  const navigate = useNavigate()

useEffect(()=>{

  if (name && email && profilePic) {
    console.log(name, email, profilePic);
    dispatch(logInUser({name , email , profilePic , role}));
  }
},[name , email , profilePic , role])

 


  const loginHandle = (encodeData) => {
    let data = jwtDecode(encodeData.credential);
    console.log("log credential" ,data);

    setProfilePic(data.picture);
    setEmail(data.email);
    setName(data.name);
  };


  useEffect(()=>{
     if(status?.loginUser === 'success'){
      navigate('/')
      console.log("ok run");
      // resetUserStatus();
     }
     return(()=>{
      dispatch(resetUserStatus());}
     )
  },[ status])

  return (
    <div className="login-container">
      <div className="login-header">
        <h1>Local Bazzar</h1>
        <img src={logo} alt="Local Bazar Logo" className="logo" />
        <p>Find your need Locally</p>
      </div>

      <div className="login-content">
        <h3>Login with Google</h3>

        <label className="checkbox-container">
          <input
            type="checkbox"
            onChange={(e) => setRole(e.target.checked ? 'shopOwner' : 'user')}
          /> 
          Log in as shop owner
        </label>

        <GoogleLogin
          onSuccess={loginHandle}
          onError={() => {
            console.log('Login Failed');
          }}
        />
      </div>
    </div>
  );
}

export default Login;
