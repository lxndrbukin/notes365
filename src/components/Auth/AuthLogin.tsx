import { auth } from '../../store';
import AuthForm from './reusable/AuthForm';

export default function AuthLogin(): JSX.Element {
  return <AuthForm thunk={auth} buttonText='LOGIN' />;
}
