import { configureStore } from "@reduxjs/toolkit";
import noteSlice from "./note";

const store = configureStore({
  reducer: {
    notes: noteSlice,
  },
});



export default store;
