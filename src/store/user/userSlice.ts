import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: {
    id: null,
    name: "mina",
    email: "",
    avatar: "",
  },
  isLoading: false,
  error: null,
  isAuthenticated: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // Start loading
    setLoading(state, action) {
      state.isLoading = action.payload;
    },
    // Set user data
    setUser(state, action) {
      state.userInfo = action.payload;
      state.isAuthenticated = true;
      state.error = null;
      state.isLoading = false;
    },
    // Clear user data on logout
    clearUser(state) {
      state.userInfo = {
        id: null,
        name: "",
        email: "",
        avatar: "",
      };
      state.isAuthenticated = false;
      state.error = null;
    },
    // Handle error
    setError(state, action) {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

// ✅ Export actions
export const { setLoading, setUser, clearUser, setError } = userSlice.actions;

// ✅ Export reducer
export default userSlice.reducer;
