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
      state.selectedItems = setSelectedItems(state);
      state.totalOrderedItems = setSelectedItems(state);
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
      state.totalOrderedItems = setSelectedItems(state);
      state.totalPrice = setTotalPrice(state);
    },
  },
});

const setSelectedItems = (state: any) => {
  return state.products.reduce((total: number, product: any) => {
    return Number(total + product.orderQuantity);
  }, 0);
};

const setTotalPrice = (state: any) => {
  return state.products.reduce((total: number, product: any) => {
    return Number(total + product.orderQuantity * product.price);
  }, 0);
};

export const { addToCart, updateQuantity } = cartSlice.actions;

export default cartSlice.reducer;
