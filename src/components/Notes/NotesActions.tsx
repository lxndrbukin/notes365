import { db } from '../../lib';
import { doc, collection, addDoc } from 'firebase/firestore';
import { GoPlus } from 'react-icons/go';

export default function NotesActions(): JSX.Element {
  const noteCollectionsRef = collection(db, 'note-collections');

  const createNote = async () => {
    await addDoc(noteCollectionsRef, { text: 'note1' });
  };

  return (
    <div className='notes-actions'>
      <input placeholder='Search for notes...' />
      <button onClick={createNote}>
        <GoPlus size={15} /> ADD NOTE
      </button>
    </div>
  );
}
