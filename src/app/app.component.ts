import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {IAppState} from '../store/state/app.state';
import {GetUserById} from '../store/actions/user.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-tour-of-heroes';

  constructor(private store: Store<IAppState>) {
  }

  ngOnInit(): void {
    this.store.dispatch(new GetUserById(1234));
  }
}
