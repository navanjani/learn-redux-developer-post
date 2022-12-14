import { configureStore } from "@reduxjs/toolkit";

import feedReducer from "./feed/slice";
import postPageSliceReducer from "./postPage/slice";
import authSliceReducer from "./auth/slice";

const store = configureStore({
  reducer: {
    feed: feedReducer,
    postPage: postPageSliceReducer,
    auth: authSliceReducer,
  },
});

export default store;
