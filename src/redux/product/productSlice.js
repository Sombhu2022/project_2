import { createSlice } from "@reduxjs/toolkit";
import { createProduct } from "./productController";
// import { addProduct, addReview, allProduct, deleteProduct, selectProduct, updateProduct } from "./productController";

const initialState = {
    product:[],
    selectedProduct:{},
    status:'ideal',
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
            state.status = 'pending'
            state.error =null
        } )
        builder.addCase( createProduct.fulfilled , (state , action)=>{
            state.status = 'success'
            state.product.push(action.payload.data)
            state.messege = 'product create successfull'
            state.error =null
        } )
        builder.addCase( createProduct.rejected , (state , action)=>{
            state.status = 'pending'
            state.error = action.payload.error
        } )
    }
})


export default productSlice.reducer
