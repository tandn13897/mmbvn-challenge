import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface VideoState {
  searchKey: string;
}

const initialState = {
  searchKey: "",
} satisfies VideoState as VideoState;

export const videoSlice = createSlice({
  name: "video",
  initialState,
  reducers: {
    setSearchKey: (state, action: PayloadAction<string>) => {
      state.searchKey = action.payload;
    },
  },
});

export const { setSearchKey } = videoSlice.actions;

export default videoSlice.reducer;
