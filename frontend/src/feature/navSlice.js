import { createSlice } from '@reduxjs/toolkit';

const stateStack = [''];

export const navSlice = createSlice({
  name: 'nav',
  initialState: {
    navState: '',
    stateStack: stateStack,
    category: 'all',
    isMobile: false,
  },
  reducers: {
    landing: (state) => {
      state.navState = setState(state.navState, state.stateStack, '');
    },
    about: (state) => {
      state.navState = setState(state.navState, state.stateStack, 'ABOUT');
    },
    project: (state) => {
      state.navState = setState(state.navState, state.stateStack, 'PROJECT');
    },
    contact: (state) => {
      state.navState = setState(state.navState, state.stateStack, 'CONTACT');
    },
    matters: (state) => {
      state.navState = setState(state.navState, state.stateStack, 'MATTERS');
    },
    setCategory: (state, action) => {
      console.log(action);
      state.category = action.payload;
    },
    setMobile: (state, payload) => {
      state.isMobile = payload.payload;
    },
  },
});

function setState(state, stateArr, curr) {
  state = curr;
  stateArr[0] !== curr && stateArr.unshift(curr);
  stateArr.length > 30 && stateArr.pop();
  return curr;
}

export const { landing, about, project, contact, matters, setCategory } =
  navSlice.actions;

export default navSlice.reducer;
