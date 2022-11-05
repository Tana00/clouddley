import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./appSlice";
// import { AppData } from "../global.interface";

export const store = configureStore({
  reducer: {
    app: appReducer,
  },
});

// export type AppData = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
