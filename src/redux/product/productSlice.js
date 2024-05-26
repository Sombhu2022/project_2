import { createSlice } from "@reduxjs/toolkit";
import { createProduct, deleteProduct, fetchProductByProductId, updateProductDetails, updateProductImage } from "./productController";
// import { addProduct, addReview, allProduct, deleteProduct, selectProduct, updateProduct } from "./productController";

const initialState = {
    product:[],
    selectProduct:{},
    status:{
        createProduct:"",
        fetchProduct:"",
        deleteProduct:"",
        editProduct:"",
        updateProductImage:'',
        updateProductDetails:''
    },
    messege:"",
    error:null
}

export const productSlice = createSlice({
    name:'product',
    initialState,
    reducers:{
        resetStatus(state , action ){
            state.status.fetchProduct = "",
            state.status.deleteProduct=""
            state.error = null
        },
        resetUpdateStatus(state , action){
            state.status.updateProductImage ="",
            state.status.updateProductDetails =""
            state.error =null ;
        }

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
            state.messege = 'product fetch successfull'
            state.error =null
        } )
        builder.addCase( fetchProductByProductId.rejected , (state , action)=>{
            state.status.fetchProduct = 'rejected'
            state.error = action.payload?.error
        } )

        
        builder.addCase( deleteProduct.pending , (state , action)=>{
            state.status.deleteProduct = 'pending'
            state.error =null
        } )
        builder.addCase( deleteProduct.fulfilled , (state , action)=>{
            state.status.deleteProduct = 'success'
            state.selectProduct ={}
            // console.log(action);
            state.messege = 'product deleted successfull'
            state.error =null
        } )
        builder.addCase( deleteProduct.rejected , (state , action)=>{
            state.status.deleteProduct = 'rejected'
            state.error = action.payload?.error
        } )


        builder.addCase( updateProductImage.pending , (state , action)=>{
            state.status.updateProductImage = 'pending'
            state.error =null
        } )
        builder.addCase( updateProductImage.fulfilled , (state , action)=>{
            state.selectProduct = action.payload.product
            // console.log(action);
            state.messege = 'product deleted successfull'
            state.error =null
            state.status.updateProductImage = 'success'
        } )
        builder.addCase( updateProductImage.rejected , (state , action)=>{
            state.status.updateProductImage = 'rejected'
            state.error = action.payload?.error
        } )


        builder.addCase( updateProductDetails.pending , (state , action)=>{
            state.status.updateProductDetails = 'pending'
            state.error =null
        } )
        builder.addCase( updateProductDetails.fulfilled , (state , action)=>{
            state.status.updateProductDetails = 'success'
            state.selectProduct = action.payload.product
            // console.log(action);
            state.messege = 'product deleted successfull'
            state.error =null
        } )
        builder.addCase( updateProductDetails.rejected , (state , action)=>{
            state.status.updateProductDetails = 'rejected'
            state.error = action.payload?.error
        } )
    }
})


export default productSlice.reducer

export const { resetStatus , resetUpdateStatus } = productSlice.actions;
