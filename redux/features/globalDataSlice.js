import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  chips: [],
}

const globalDataSlice = createSlice({
  name: "chips",
  initialState,
  reducers: {
    loadChips: (state, action) => {
      state.chips = action.payload
    }
  },
});

export const { loadChips } = globalDataSlice.actions

export default globalDataSlice.reducer;