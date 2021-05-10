import {IAppState} from '../state/app.state';
import {createSelector} from '@ngrx/store';

const selectUsers = (state: IAppState) => state.users;

export const selectUsersList = createSelector(selectUsers, (state) => state.users);
