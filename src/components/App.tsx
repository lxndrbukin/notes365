import Sidebar from './Sidebar/Sidebar';
import Notes from './Notes/Notes';
import NoteEditor from './Notes/NoteEditor';

export default function App(): JSX.Element {
  return (
    <div className='main-container'>
      <Sidebar />
      <Notes />
      <NoteEditor />
    </div>
  );
}
