import { createSlice } from "@reduxjs/toolkit";

const initialState={
    page:"AllProducts",
    data:null
}

const pageSlice = createSlice({
    name:"pageSlice",
    initialState,
    reducers:{
        setPage:(state,action)=>{
            state.page = action.payload
        },
        setData : (state,action)=>
        {
            state.data = action.payload
        }

    }
})

export const {setPage,setData} = pageSlice.actions
export default pageSlice.reducer