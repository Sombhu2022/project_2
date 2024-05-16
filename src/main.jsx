import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './gobal.css'
import { Provider } from 'react-redux'
import { store } from './redux/store.js'
import { GoogleOAuthProvider } from '@react-oauth/google';

ReactDOM.createRoot(document.getElementById('root')).render(
   <Provider store={store}>
   <GoogleOAuthProvider clientId="315243322628-jht43tgj4ce45dk945b6f400re7nqhor.apps.googleusercontent.com">
       <App />
    </GoogleOAuthProvider>;

   </Provider>
   
)
