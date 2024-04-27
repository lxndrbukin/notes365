export enum Slices {
  Session = 'session',
  Notes = 'notes'
}

export interface UserData {
  userId: number;
  name: {
    firstName: string;
    lastName: string;
  };
}

export interface Session {
  isLoggedIn: boolean;
  userData: undefined | UserData;
}