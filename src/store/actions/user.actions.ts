import {Action} from '@ngrx/store';
import {IUser} from '../../app/models/user.interface';

export enum EUserActions {
  GetUserById= '[User] Get User By ID',
  GetUserByIdSuccess= '[User] Get User by ID Success',
  GetUserByIdFailure= '[User] Get User by ID Failure'
}

export class GetUserById implements Action {
  public readonly type = EUserActions.GetUserById;
  constructor(public id: number) {}
}

export class GetUserByIdSuccess implements Action {
  public readonly type = EUserActions.GetUserByIdSuccess;
  constructor(public payload: IUser) {}
}


export class GetUserByIdFailure implements Action {
  public readonly type = EUserActions.GetUserByIdFailure;
  constructor(public error: Error) {}
}

export type UserActions = GetUserById | GetUserByIdSuccess | GetUserByIdFailure;
