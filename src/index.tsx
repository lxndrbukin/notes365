import './assets/styles.scss';
import ReactDOM from 'react-dom/client';
import App from './components/App';

const rootDiv = document.querySelector('#root');

if (rootDiv) {
  const root = ReactDOM.createRoot(rootDiv);
  root.render(<App />);
}
