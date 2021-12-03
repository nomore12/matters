import { createSlice } from '@reduxjs/toolkit';

export const navSlice = createSlice({
  name: 'nav',
  initialState: {
    navState: 'landing',
  },
  reducers: {
    landing: (state) => {
      state.navState = 'landing';
    },
    about: (state) => {
      state.navState = 'about';
    },
    project: (state) => {
      state.navState = 'project';
    },
    contact: (state) => {
      state.navState = 'contact';
    },
    matters: (state) => {
      state.navState = 'matters';
    },
  },
});

export const { landing, about, project, contact, matters } = navSlice.actions;
export default navSlice.reducer;
