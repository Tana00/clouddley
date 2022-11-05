import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppData } from "../global.interface";

// interface App {
//   id: string;
//   createdAt: Date;
//   url: string;
//   name: string;
//   region: string;
//   environment: string;
// }

const todoSlice = createSlice({
  name: "apps",
  initialState: [],
  reducers: {
    addItem: (state, action: PayloadAction<AppData>) => {
      const newApp = {
        id: new Date().getTime().toString(),
        createdAt: new Date(),
        url: action.payload.url,
        name: action.payload.name,
        region: action.payload.region,
        environment: action.payload.environment,
      };
      //   @ts-ignore
      newApp.add && state.push(newApp);
    },

    //clear all item in list
    clearList: (state) => {
      return [];
    },
  },
});

export const { addItem, clearList } = todoSlice.actions;

export default todoSlice.reducer;
