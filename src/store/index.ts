import { configureStore } from '@reduxjs/toolkit';
import sessionReducer from './slices/sessionSlice';
import notesReducer from './slices/notesSlice';

export const store = configureStore({
  reducer: {
    session: sessionReducer,
    notes: notesReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export * from './slices/sessionSlice';
export * from './slices/notesSlice';
export * from './thunks/createNote';
export * from './thunks/auth';