import { createSlice } from "@reduxjs/toolkit";
import { createProduct, fetchProductByProductId } from "./productController";
// import { addProduct, addReview, allProduct, deleteProduct, selectProduct, updateProduct } from "./productController";

const initialState = {
    product:[],
    selectProduct:{},
    status:{
        createProduct:"",
        fetchProduct:""
    },
    messege:"",
    error:null
}

export const productSlice = createSlice({
    name:'product',
    initialState,
    reducers:{

    },
    extraReducers:(builder)=>{
        builder.addCase( createProduct.pending , (state , action)=>{
            state.status.createProduct = 'pending'
            state.error =null
        } )
        builder.addCase( createProduct.fulfilled , (state , action)=>{
            state.status.createProduct = 'success'
            state.product.push(action.payload.product)
            console.log(action);
            state.messege = 'product create successfull'
            state.error =null
        } )
        builder.addCase( createProduct.rejected , (state , action)=>{
            state.status.createProduct = 'rejected'
            state.error = action.payload.error
        } )


        builder.addCase( fetchProductByProductId.pending , (state , action)=>{
            state.status.fetchProduct = 'pending'
            state.error =null
        } )
        builder.addCase( fetchProductByProductId.fulfilled , (state , action)=>{
            state.status.fetchProduct = 'success'
            state.selectProduct = action.payload.product
            // console.log(action);
            state.messege = 'product create successfull'
            state.error =null
        } )
        builder.addCase( fetchProductByProductId.rejected , (state , action)=>{
            state.status.fetchProduct = 'rejected'
            state.error = action.payload?.error
        } )
    }
})


export default productSlice.reducer
