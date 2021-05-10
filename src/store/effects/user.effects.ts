import {Injectable} from '@angular/core';
import {Actions, ofType, createEffect} from '@ngrx/effects';
import {EUserActions, GetUserById, GetUserByIdFailure, GetUserByIdSuccess} from '../actions/user.actions';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {EMPTY, of} from 'rxjs';
import {UserService} from '../../services/userService';

@Injectable()
export class UserEffects {
  getUserById$ = createEffect(() => this.actions$.pipe(
    ofType<GetUserById>(EUserActions.GetUserById),
    mergeMap(
      (action) => {
        console.log('ACTION:', action);
        return this.userService.getUserById(action.id).pipe(
          map(user => (new GetUserByIdSuccess(user)),
            catchError((error) => of(new GetUserByIdFailure(error))))
        );
      }
    )
  ));

  constructor(private actions$: Actions, private readonly userService: UserService) {}
}
