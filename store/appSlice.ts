import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppData } from "../global.interface";

// interface App {
//   id: string;
//   created: Date;
//   url: string;
//   name: string;
//   region: string;
//   environment: string;
// }

const appSlice = createSlice({
  name: "apps",
  initialState: [],
  reducers: {
    addItem: (state, action: PayloadAction<AppData>) => {
      const newApp = {
        id: new Date().getTime().toString(),
        created: new Date(),
        url: action.payload.url,
        name: action.payload.name,
        region: action.payload.region,
        environment: action.payload.environment,
      };
      //   @ts-ignore
      state.push(newApp);
    },

    //clear all item in list
    clearList: (state) => {
      return [];
    },
  },
});

export const { addItem, clearList } = appSlice.actions;

export default appSlice.reducer;
