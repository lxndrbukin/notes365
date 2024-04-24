import Sidebar from './Sidebar/Sidebar';
import Notes from './Notes/Notes';

export default function App(): JSX.Element {
  return (
    <div className="main-container">
      <Sidebar />
      <Notes />
    </div>
  );
}
