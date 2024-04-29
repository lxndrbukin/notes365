import { createAsyncThunk } from '@reduxjs/toolkit';
import { AuthFormValues, AuthTypes } from './types';
import { db } from '../../lib';
import { addDoc, getDocs, collection } from 'firebase/firestore';

export const auth = createAsyncThunk(
  'session/auth',
  async ({ email, password, authType }: AuthFormValues) => {
    const usersCollectionRef = collection(db, 'users');
    switch (authType) {
      case AuthTypes.Signup:
        const id = (await getDocs(usersCollectionRef)).size + 1;
        await addDoc(usersCollectionRef, { id, email, password });
        break;
      case AuthTypes.Login:
        return;
    }
  }
);
