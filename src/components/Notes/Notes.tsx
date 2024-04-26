import './assets/styles.scss';
import NotesActions from './NotesActions';
import NotesList from './NotesList';

export default function Notes(): JSX.Element {
  return (
    <section className='notes'>
      <NotesActions />
      <NotesList />
    </section>
  );
}
