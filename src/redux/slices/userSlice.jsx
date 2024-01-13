import { createSlice } from "@reduxjs/toolkit";
import productSlice from "./productSlice";

const initialState = {
  user: localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null,
};

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    Login: (state, action) => {
      state.user = action.payload
      localStorage.setItem('userInfo',JSON.stringify(action.payload))
    },
    Logout: (state, action) => {
      state.user = null;
      localStorage.removeItem('userInfo')
    },
  },
});

export const { Login, Logout } = userSlice.actions;

export default userSlice.reducer;
