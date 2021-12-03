import { configureStore } from '@reduxjs/toolkit';
import userSlice from 'feature/userSlice';
import navSlice from 'feature/navSlice';

export default configureStore({
  reducer: {
    // user: userSlice,
    nav: navSlice,
  },
});
