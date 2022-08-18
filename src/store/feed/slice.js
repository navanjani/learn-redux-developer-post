import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  posts: [],
};

const feedSlice = createSlice({
  name: "feed",
  initialState,
  reducers: {
    startLoading: (state, action) => {
      state.loading = true;
    },
    postsFetched: (state, action) => {
      console.log(action);
      state.posts = [...state.posts, ...action.payload];
      state.loading = false;
    },
  },
});
export const { startLoading, postsFetched } = feedSlice.actions;

export default feedSlice.reducer;
