import { auth } from '../../store';
import AuthForm from './reusable/AuthForm';

export default function AuthSignup(): JSX.Element {
  return <AuthForm thunk={auth} buttonText='SIGN UP' />;
}
