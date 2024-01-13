import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  totalAmount: 0,
};

const cart = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const exist = state.products.find(
        (pro) => pro.name == action.payload.name
      );
      if (exist) {
        state.products.forEach((pro) => {
          if (pro.name == action.payload.name) {
            pro.quantity += action.payload.quantity;
          }
        });
      } else {
        state.products.push(action.payload);
      }

      const amount = action.payload.price * action.payload.quantity;

      state.totalAmount += amount;
    },
    removeFromCart: (state, action) => {
      state.products.forEach((pro) => {
        if (pro.name == action.payload.name) {
          const amount = action.payload.quantity * action.payload.price;
          state.totalAmount -= amount;
        }
      });
      state.products = state.products.filter((pro) => {
        return pro.name !== action.payload.name;
      });
    },
    ChangeQuantity: (state, action) => {
      const updatedProducts = state.products.map((pro) => {
        if (pro.name === action.payload.product.name) {
          return { ...pro, quantity: action.payload.quantity };
        }
        return pro;
      });

      state.products = updatedProducts;
      state.totalAmount = updatedProducts.reduce((total, pro) => {
        return total + pro.price * pro.quantity;
      }, 0);
    },
  },
});

export const { addToCart, removeFromCart, ChangeQuantity } = cart.actions;
export default cart.reducer;
