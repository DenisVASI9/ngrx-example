import {InitialUsersState, IUserState} from './user.state';

export interface IAppState {
  users: IUserState;
}

export const initialAppState: IAppState = {
  users: InitialUsersState
};

export function getInitialState(): IAppState {
  return initialAppState;
}
