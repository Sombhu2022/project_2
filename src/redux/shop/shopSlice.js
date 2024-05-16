import { createSlice } from "@reduxjs/toolkit"
import { createShop } from "./shopController"


const initialState = {
    shop:[],
    selectedProduct:{},
    status:'ideal',
    message:"",
    error:null
}

export const shopSlice = createSlice({
    name:"shop",
    initialState,
    reducers:{

    },
    extraReducers:(builder)=>{
        builder.addCase(createShop.pending , (state , action)=>{
            state.status = 'createPending'
        })
        builder.addCase(createShop.fulfilled , (state , action)=>{
            state.shop.push(action.payload.newShop)
            state.message = 'Shop Created successfull'
            state.status = 'createSuccess'
        })
        builder.addCase(createShop.rejected , (state ,action)=>{
            state.error = action.payload.error
            state.message = 'Shop not created'
            state.status = 'createRejected'
        })
    }
})


export default shopSlice.reducer