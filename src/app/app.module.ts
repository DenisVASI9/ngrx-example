import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {UserService} from '../services/userService';
import {StoreModule} from '@ngrx/store';
import {appReducers} from '../store/reducers/app.reducer';
import {EffectsModule} from '@ngrx/effects';
import {UserEffects} from '../store/effects/user.effects';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot([UserEffects]),
    StoreDevtoolsModule.instrument()
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
