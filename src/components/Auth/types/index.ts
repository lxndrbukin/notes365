import { AuthFormValues } from '../../../store/thunks/types';
import { AsyncThunk } from '@reduxjs/toolkit';
import { AsyncThunkConfig } from '@reduxjs/toolkit/dist/createAsyncThunk';

export interface AuthFormProps {
  buttonText: string;
  thunk: AsyncThunk<void, AuthFormValues, AsyncThunkConfig>;
}

export interface AuthFormInputProps {
  label: string;
  type: string;
  name: string;
}
