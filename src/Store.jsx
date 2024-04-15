import { configureStore } from "@reduxjs/toolkit";
import BasketReducer from "./Slice/BasketSlice";

export const Store = configureStore({
  reducer: {
    basket: BasketReducer,
  },
});
