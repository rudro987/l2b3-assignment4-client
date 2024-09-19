/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice } from "@reduxjs/toolkit";
import { TUpdateProps } from "../../../pages/ProductManagement/ProductManagement";


export type TCartProps = {
  products: TUpdateProps[];
  selectedItems: number;
  totalPrice: number;
};

const iniatialState: TCartProps = {
    products: [],
    selectedItems: 0,
    totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: iniatialState,
  reducers: {
    addToCart: (state, action) => {
      const isProductExist = state.products.find(product => product._id === action.payload._id);
      if(!isProductExist){
        state.products.push({...action.payload, orderQuantity: 1});
        state.selectedItems += 1;
        state.totalPrice += action.payload.price;
      }
      state.selectedItems=selectedItems(state);
    },
  },
});

export const selectedItems = (state: any) => {
    return state.products.reduce((total: number, product: any) => {
        return Number(total + product.orderQuantity)
    }, 0)
}

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
