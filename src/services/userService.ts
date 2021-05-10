import {Injectable} from '@angular/core';
import {IUser} from '../app/models/user.interface';
import {Observable, of} from 'rxjs';

@Injectable()
export class UserService {
  getUserById(id: number): Observable<IUser> {
    console.log(id);
    const user: IUser = {
      username: 'sampleUser',
      email: 'sample@user.com'
    };
    return of(user);
  }
}
