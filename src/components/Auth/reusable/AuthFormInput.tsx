import { AuthFormInputProps } from '../types';

export default function AuthFormInput({
  label,
  type,
  name,
}: AuthFormInputProps): JSX.Element {
  return (
    <div className='auth-form-input'>
      <label>{label}</label>
      <input name={name} type={type} autoComplete='new-password' />
    </div>
  );
}
