import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice.js";
import messageSlice from "./messageSlice.js";

const store = configureStore({
  reducer: {
    user: userSlice,
    message: messageSlice,
  },
});

export default store;
