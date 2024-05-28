import { createSlice } from "@reduxjs/toolkit";
import { authUser, logInUser, logoutUser } from "./userController";

const initialState = {
    user:{},
    isAuthenticate:false,
    isRoleShopOwner:false,
    status:{
        loginUser:"",
        logOutUser:"",
        authUser:""
    },
    error:null,
    message:null,
}

export const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
        resetStatus(state , action ){
            state.status = "ideal"
            state.error = null
        }

    },
    extraReducers:(builder)=>{
        // builder.addCase( createUser.pending , (state , action)=>{
        //     state.status ="pending";
        //     state.error =null
        //     state.isAuthenticate=false
        //     state.user = {}
        //     state.message = null
        // })

        // builder.addCase(createUser.fulfilled ,(state , action)=>{
        //     //  state.error = action.payload
        //     state.status ="regSuccess";
        //     state.message = action.payload.message 
        //     state.isAuthenticate = true;
        //     state.user = action.payload.user
        //     localStorage.setItem("token" , action.payload.token)
        // } )


        // builder.addCase(createUser.rejected , (state , action)=>{
        //     state.error=action.error.message
        //     state.status="rejected"
        //     state.isAuthenticate=false
        //     state.message = action.error.message
        // })

        builder.addCase(logInUser.pending , (state , action)=>{
            state.status.loginUser="pending"
            
        })
       
        builder.addCase(logInUser.fulfilled ,(state , action)=>{
            //  state.error = action.payload
            state.status.loginUser ="success";
            state.message = action.payload.message 
            state.isAuthenticate = true;
            state.user = action.payload.user
            if(action.payload?.user?.role === 'shopOwner'){
                 state.isRoleShopOwner = true
                }

            localStorage.setItem("token" , action.payload.token)
        } )


        builder.addCase(logInUser.rejected , (state , action)=>{
            state.error=action.error.message
            state.status.loginUser="rejected"
            state.isAuthenticate=false
            state.isRoleShopOwner = false
            state.message = action.error.message
        })



        builder.addCase(authUser.pending , (state , action)=>{
            state.status.authUser="pending"
            state.error =null
            state.isAuthenticate=false

            state.isRoleShopOwner = false
            
            state.user = {}
            state.message = null
        })
       
        builder.addCase(authUser.fulfilled ,(state , action)=>{
            //  state.error = action.payload
            state.status.authUser ="success";
            state.message = action.payload.message 
            state.isAuthenticate = true;
            state.user = action.payload.user
            if(action.payload?.user?.role === 'shopOwner'){ console.log("ok"); state.isRoleShopOwner = true}
            // localStorage.setItem("token" , action.payload.token)
        } )


        builder.addCase(authUser.rejected , (state , action)=>{
            state.error=action.error.message
            state.status.authUser="rejected"
            state.isAuthenticate=false
            state.isRoleShopOwner = false

            state.message = action.error.message
        })


        builder.addCase(logoutUser.pending , (state , action)=>{
            state.status.logOutUser="pending"
            state.error =null
            state.isAuthenticate=false
            state.isRoleShopOwner = false
            state.user = {}
            state.message = null
        })
       
        builder.addCase(logoutUser.fulfilled ,(state , action)=>{
            //  state.error = action.payload
            state.status.logOutUser ="logoutSuccess";
            state.message = action.payload.message 
            state.isAuthenticate = false;
            state.isRoleShopOwner = false  
            state.user = {}
            localStorage.setItem("token" , null)
        } )


        builder.addCase(logoutUser.rejected , (state , action)=>{
            state.error=action.error.message
            state.status.logOutUser="rejected"
            state.isAuthenticate=false
            state.isRoleShopOwner = false
            state.message = action.error.message
        })


    }
})


export default userSlice.reducer