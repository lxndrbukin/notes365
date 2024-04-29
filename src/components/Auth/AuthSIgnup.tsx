import { FormEvent } from 'react';
import AuthForm from './reusable/AuthForm';
import AuthFormInput from './reusable/AuthFormInput';

export default function AuthSignup(): JSX.Element {
  const handleSubmit = (e: FormEvent<HTMLInputElement>): void => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      email: { value: string };
      password: { value: string };
    };
    const { email, password } = target;
    console.log(email.value, password.value);
  };

  return (
    <AuthForm onSubmit={handleSubmit} buttonText="Sign Up">
      <></>
    </AuthForm>
  );
}
