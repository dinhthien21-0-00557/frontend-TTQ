import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    isLoggedIn: false,
    error: null,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = !!action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setUser, setError } = authSlice.actions;

export const selectUser = (state: any) => state.auth.user;
export const selectIsLoggedIn = (state: any) => state.auth.isLoggedIn;
export const selectError = (state: any) => state.auth.error;

export default authSlice.reducer;
