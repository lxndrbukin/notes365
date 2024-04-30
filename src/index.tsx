import './assets/styles.scss';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import { store } from './store';
import { Provider } from 'react-redux';
import App from './components/App';

const rootDiv = document.querySelector('#root');

if (rootDiv) {
  const root = ReactDOM.createRoot(rootDiv);
  root.render(
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}
