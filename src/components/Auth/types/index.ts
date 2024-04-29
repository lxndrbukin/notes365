export interface AuthFormProps {
  buttonText: string;
  thunk: ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => Promise<void>;
}

export interface AuthFormInputProps {
  label: string;
  type: string;
  name: string;
}
