import { createSlice } from "@reduxjs/toolkit"
import { createShop, fetchAllShop, postShopReview, selectShop } from "./shopController"


const initialState = {
    shop:[],
    selectedShop:{},
    status:{
        addShop:'',
        selectShop:'',
        fetchShop:'',
        shopReview:''
    },
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
            state.status.addShop = 'pending'
        })
        builder.addCase(createShop.fulfilled , (state , action)=>{
            state.shop.push(action.payload.newShop)
            state.message = 'Shop Created successfull'
            state.status.addShop = 'success'
        })
        builder.addCase(createShop.rejected , (state ,action)=>{
            state.error = action.payload.error
            state.message = 'Shop not created'
            state.status.addShop = 'rejected'
        })
        builder.addCase(fetchAllShop.pending , (state , action)=>{
            state.status.fetchShop = 'pending'
        })
        builder.addCase(fetchAllShop.fulfilled , (state , action)=>{
            state.shop = action.payload.allShops
            state.message = 'Shop Created successfull'
            state.status.fetchShop = 'success'
        })
        builder.addCase(fetchAllShop.rejected , (state ,action)=>{
            state.error = action.payload.error
            state.message = 'Shop not created'
            state.status.fetchShop = 'rejected'
        })


        builder.addCase(selectShop.pending , (state , action)=>{
            state.status.selectShop = 'pending'
        })
        builder.addCase(selectShop.fulfilled , (state , action)=>{
            state.selectedShop = action.payload.shop
            state.message = 'Shop select successfull'
            state.status.selectShop = 'success'
        })
        builder.addCase(selectShop.rejected , (state ,action)=>{
            state.error = action.payload.error
            state.message = 'Shop not selected'
            state.status.selectShop = 'rejected'
        })


        builder.addCase(postShopReview.pending , (state , action)=>{
            state.status.shopReview = 'pending'
        })
        builder.addCase(postShopReview.fulfilled , (state , action)=>{
            state.selectedShop = action.payload.shop
            state.message = 'Shop select successfull'
            state.status.shopReview = 'success'
        })
        builder.addCase(postShopReview.rejected , (state ,action)=>{
            state.error = action.payload.error
            state.message = 'Shop not selected'
            state.status.shopReview = 'rejected'
        })
    }
})


export default shopSlice.reducer