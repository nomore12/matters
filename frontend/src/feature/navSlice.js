import { createSlice } from '@reduxjs/toolkit';

export const navSlice = createSlice({
  name: 'nav',
  initialState: {
    loggedIn: 'landing',
    reducer: {
      login: (state) => {
        state.loggedIn = true;
      },
      logout: (state) => {
        state.loggedIn = false;
      }
    }
  }
})

export const { login, logout } = navSlice.reducer;
export default navSlice.reducer;