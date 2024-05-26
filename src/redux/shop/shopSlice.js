import { createSlice } from "@reduxjs/toolkit"
import { createShop, deleteShop, fetchAllShop, postShopReview, selectShop, updateShopDetails, updateShopLogo } from "./shopController"



const initialState = {
    shop:[],
    selectedShop:{},
    status:{
        addShop:'',
        selectShop:'',
        fetchShop:'',
        shopReview:'',
        deleteShop:"",
        updateShopDetails:"",
        updateShopLogo:""
    },
    message:"",
    error:null
}

export const shopSlice = createSlice({
    name:"shop",
    initialState,
    reducers:{
        resetDeleteStatus(state , action){
           state.status.deleteShop = ""
        }

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


        builder.addCase(deleteShop.pending , (state , action)=>{
            state.status.deleteShop = 'pending'
        })
        builder.addCase(deleteShop.fulfilled , (state , action)=>{
            state.selectedShop = {}
            state.shop = state.shop.filter(ele => ele._id !== action.payload.shop._id)
            state.message = 'Shop select successfull'
            state.status.deleteShop = 'success'
        })
        builder.addCase(deleteShop.rejected , (state ,action)=>{
            state.error = action.payload.error
            state.message = 'Shop not selected'
            state.status.deleteShop = 'rejected'
        })


        builder.addCase(updateShopDetails.pending , (state , action)=>{
            state.status.updateShopDetails = 'pending'
        })
        builder.addCase(updateShopDetails.fulfilled , (state , action)=>{
            state.selectedShop = action.payload.shop
            state.message = 'Shop select successfull'
            state.status.updateShopDetails = 'success'
        })
        builder.addCase(updateShopDetails.rejected , (state ,action)=>{
            state.error = action.payload.error
            state.message = 'Shop not selected'
            state.status.updateShopDetails = 'rejected'
        })


        builder.addCase(updateShopLogo.pending , (state , action)=>{
            state.status.updateShopLogo = 'pending'
        })
        builder.addCase(updateShopLogo.fulfilled , (state , action)=>{
            state.selectedShop = action.payload.shop
            state.message = 'Shop select successfull'
            state.status.updateShopLogo = 'success'
        })
        builder.addCase(updateShopLogo.rejected , (state ,action)=>{
            state.error = action.payload.error
            state.message = 'Shop not selected'
            state.status.updateShopLogo = 'rejected'
        })
    }
})


export default shopSlice.reducer

export const { resetDeleteStatus } =shopSlice.actions