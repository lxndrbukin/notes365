import { createSlice } from '@reduxjs/toolkit';
import { Slices, Session, UserData } from './types';

const initialState: Session = {
  isLoggedIn: false,
  userData: undefined
};

const sessionSlice = createSlice({
  name: Slices.Session,
  initialState,
  reducers: {}
});

export default sessionSlice.reducer;