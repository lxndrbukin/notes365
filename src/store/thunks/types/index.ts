export enum AuthTypes {
  Signup = 'signup',
  Login = 'login',
}

export interface AuthFormValues {
  email: string;
  password: string;
  authType: AuthTypes;
}
