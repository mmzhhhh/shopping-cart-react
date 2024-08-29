import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:"cart",
    initialState:[],
    reducers:{
        addToCart(state,action){
           console.log(action);
           state.push(action.payload);
           console.log(JSON.parse(JSON.stringify(state)));
        },
        removeFromCart(state,action){
            return state.filter((item)=>item.id!==action.payload)
        }
    }
})

export const {addToCart,removeFromCart}=cartSlice.actions;
export default cartSlice.reducer;