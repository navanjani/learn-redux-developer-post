import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: true,
  post: null,
  comments: [],
};

const postPageSlice = createSlice({
  name: "postPage",
  initialState,
  reducers: {
    startLoadingPost: (state, action) => {
      state.loading = true;
    },
    fetchFullPost: (state, action) => {
      state.post = action.payload.post;
      state.comments = action.payload.comments;
      state.loading = false;
    },
  },
});

export const { startLoadingPost, fetchFullPost } = postPageSlice.actions;
export default postPageSlice.reducer;
