import { IUser } from '../../app/models/user.interface';

export interface IUserState {
  users: IUser[];
  loading: boolean;
  error: Error;
}

export const InitialUsersState: IUserState = {
  users: [],
  error: null,
  loading: false
};


