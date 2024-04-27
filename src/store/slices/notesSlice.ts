import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  list: []
};

const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {}
});

export default notesSlice.reducer;