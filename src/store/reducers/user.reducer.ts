import {InitialUsersState, IUserState} from '../state/user.state';
import {EUserActions, UserActions} from '../actions/user.actions';

export const userReducer = (
  state = InitialUsersState,
  action: UserActions
): IUserState => {
  switch (action.type) {
    case EUserActions.GetUserById:
      return {
        ...state,
        loading: true
      };
    case EUserActions.GetUserByIdSuccess:
      const users = [...state.users];
      users.push(action.payload);
      return {...state, loading: false, users};
    case EUserActions.GetUserByIdFailure:
      return {...state, error: action.error};
    default:
      return state;
  }
};

