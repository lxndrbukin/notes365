import AuthForm from './reusable/AuthForm';
import AuthFormInput from './reusable/AuthFormInput';

export default function AuthLogin(): JSX.Element {
  return (
    <AuthForm>
      <>
        <AuthFormInput type="text" label="Email:" />
      </>
    </AuthForm>
  );
}
