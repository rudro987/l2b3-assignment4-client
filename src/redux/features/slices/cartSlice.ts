/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice } from "@reduxjs/toolkit";
import { TUpdateProps } from "../../../pages/ProductManagement/ProductManagement";

export interface TCartItems extends TUpdateProps{
    orderQuantity: number
}

export type TCartProps = {
  products: TCartItems[];
  selectedItems: number;
  totalPrice: number;
  totalOrderedItems: number;
};

const iniatialState: TCartProps = {
  products: [],
  selectedItems: 0,
  totalPrice: 0,
  totalOrderedItems: 0
};

const cartSlice = createSlice({
  name: "cart",
  initialState: iniatialState,
  reducers: {
    addToCart: (state, action) => {
      const isProductExist = state.products.find(
        (product) => product._id === action.payload._id
      );
      if (!isProductExist) {
        state.products.push({ ...action.payload, orderQuantity: 1 });
      }
      state.selectedItems = state.products.length;
      state.totalOrderedItems = setTotalQuantity(state);
      state.totalPrice = setTotalPrice(state);
    },
    updateQuantity: (state, action) => {
      state.products.map((product) => {
        if (product._id === action.payload.id) {
          if (action.payload.type === "increment") {
            product.orderQuantity += 1;
          } else if (action.payload.type === "decrement") {
            if(product.orderQuantity >= 1){
                product.orderQuantity -= 1;
            }
          }
        }
        return product;
      });
      state.totalOrderedItems = setTotalQuantity(state);
      state.totalPrice = setTotalPrice(state);
    },

    removeCartItem: (state, action) => {
      state.products = state.products.filter(
        (product: any) => product._id !== action.payload.id
      );
    
      state.selectedItems = state.products.length;
      state.totalOrderedItems = setTotalQuantity(state);
      state.totalPrice = setTotalPrice(state);
    },

    clearCart: (state) => {
      state.products = [];
      state.selectedItems = 0;
      state.totalPrice = 0;
      state.totalOrderedItems = 0;
    },
  },
});

const setTotalQuantity = (state: any) => {
  return state.products.reduce((total: number, product: any) => {
    return Number(total + product.orderQuantity);
  }, 0);
};

const setTotalPrice = (state: any) => {
  return state.products.reduce((total: number, product: any) => {
    return Number(total + product.orderQuantity * product.price);
  }, 0);
};


export const { addToCart, updateQuantity, removeCartItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
