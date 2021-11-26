import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    loggedIn: false,
    reducer: {
      login: (state) => {
        state.loggedIn = true;
      },
      logout: (state) => {
        state.loggedIn = false;
      },
    },
  },
});

export const { login, logout } = userSlice.reducer;
export default userSlice.reducer;
