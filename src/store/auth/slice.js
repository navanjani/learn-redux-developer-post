import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  me: null,
  accessToken: null,
  loading: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken: (state, action) => {
      const { token } = action.payload;
      state.accessToken = token;
      localStorage.setItem("token", token);
    },
    bootstrapAuth: (state, action) => {
      if (state.accessToken === null && localStorage.getItem("token")) {
        state.accessToken = localStorage.getItem("token");
      }
    },
  },
});

export const { setToken, bootstrapAuth } = authSlice.actions;

export default authSlice.reducer;
