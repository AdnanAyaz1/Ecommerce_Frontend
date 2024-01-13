import { createSlice } from "@reduxjs/toolkit";
 
const initialState = {
    products:[],
    
}

const favourite = createSlice({
    name:"favouriteSlice",
    initialState,
    reducers:{
        addTofavourite : (state,action)=>{
            state.products.push(action.payload)
        },
        removeFromfavourite : (state,action)=>{
            state.products = state.products.filter((pro)=>pro.name!==action.payload.name)
        }
    }
})

export const {addTofavourite,removeFromfavourite} = favourite.actions
export default favourite.reducer