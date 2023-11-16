import { createSlice } from "@reduxjs/toolkit";

const initialState = { loadingState: 'loaded' };

const loadingStateSlice = createSlice({
  name: "loading state",
  initialState,
  reducers: {
    setLoadingState(state, { payload }) {
      state.loadingState = payload;
    }
  },
});

export const { setLoadingState } = loadingStateSlice.actions;
export default loadingStateSlice.reducer;
