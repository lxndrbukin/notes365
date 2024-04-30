import '../assets/styles.scss';
import { FormEvent } from 'react';
import { AuthFormProps } from '../types';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../store';
import AuthFormInput from './AuthFormInput';

export default function AuthForm({
  buttonText,
  thunk,
}: AuthFormProps): JSX.Element {
  const dispatch = useDispatch<AppDispatch>();

  const action = () => {
    console.log('hi');
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      email: { value: string };
      password: { value: string };
    };
    const { email, password } = target;
    console.log(email.value, password.value);
    dispatch(() => {});
  };

  return (
    <div className='auth'>
      <div className='auth-side'>
        <span>notes365</span>
      </div>
      <form className='auth-form' onSubmit={handleSubmit}>
        <AuthFormInput name='email' type='text' label='Email:' />
        <AuthFormInput name='password' type='password' label='Password:' />
        <button>{buttonText}</button>
      </form>
    </div>
  );
}
