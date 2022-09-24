import { configureStore } from "@reduxjs/toolkit";
import listSlice from "./redux-slices/list-slice";

export const store = configureStore({
  reducer: {
    list: listSlice,
  },
});
