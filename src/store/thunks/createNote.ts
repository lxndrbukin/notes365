import { createAsyncThunk } from '@reduxjs/toolkit';
import { db } from '../../lib';
import { addDoc, getDocs, collection } from 'firebase/firestore';

export const createNote = createAsyncThunk('notes/createNote', async () => {
  const notesCollectionRef = collection(db, 'notes');
  const id = (await getDocs(notesCollectionRef)).size + 1;
  await addDoc(notesCollectionRef, { id, text: 'Note' });
});
