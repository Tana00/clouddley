import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppData } from "../global.interface";

const appSlice = createSlice({
  name: "apps",
  initialState: [],
  reducers: {
    addApp: (state, action: PayloadAction<AppData>) => {
      const newApp = {
        id: action.payload.id,
        created: action.payload.created,
        url: action.payload.url,
        name: action.payload.name,
        region: action.payload.region,
        environment: action.payload.environment,
      };
      //   @ts-ignore
      state.push(newApp);
    },
  },
});

export const { addApp } = appSlice.actions;

export default appSlice.reducer;
