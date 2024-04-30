import { Outlet } from 'react-router-dom';

export default function App(): JSX.Element {
  return (
    <div className='container'>
      <Outlet />
    </div>
  );
}
