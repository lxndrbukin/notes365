import { createBrowserRouter } from 'react-router-dom';
import App from '../components/App';
import AuthLogin from '../components/Auth/AuthLogin';
import AuthSignup from '../components/Auth/AuthSignup';
import Notes from '../components/Notes/Notes';
import Sidebar from '../components/Sidebar/Sidebar';
import NoteEditor from '../components/Notes/NoteEditor';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/auth/login',
        element: <AuthLogin />,
      },
      {
        path: '/auth/signup',
        element: <AuthSignup />,
      },
      {
        path: '/notes',
        element: (
          <div className='main'>
            <Sidebar />
            <Notes />
            <NoteEditor />
          </div>
        ),
      },
    ],
  },
]);
