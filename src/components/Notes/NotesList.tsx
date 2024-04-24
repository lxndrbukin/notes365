import NotesListItem from './NotesListItem';
import { notes } from './assets/notes';

export default function NotesList(): JSX.Element {
  const renderedNotes = notes.map((note) => {
    return <NotesListItem {...note} />;
  });

  return <ul className="notes-list">{renderedNotes}</ul>;
}
