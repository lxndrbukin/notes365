import { useDispatch } from 'react-redux';
import { AppDispatch, createNote } from '../../store';
import { db } from '../../lib';
import { doc, collection, addDoc } from 'firebase/firestore';
import { GoPlus } from 'react-icons/go';

export default function NotesActions(): JSX.Element {
  const dispatch = useDispatch<AppDispatch>();

  const handleClick = () => {
    dispatch(createNote());
  };

  return (
    <div className='notes-actions'>
      <input placeholder='Search for notes...' />
      <button onClick={handleClick}>
        <GoPlus size={15} /> ADD NOTE
      </button>
    </div>
  );
}
