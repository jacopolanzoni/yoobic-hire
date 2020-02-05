import { Observable, of } from 'rxjs';

import { Injectable } from '@angular/core';

import { User } from '../interfaces/user.interace';

@Injectable({
  providedIn: 'root',
})
export class LoginService {

  private _isUserLoggedIn: boolean = false;

  public isUserLoggedIn(): boolean {
    return this._isUserLoggedIn;
  }

  public logUserIn(user: User): Observable<boolean> {
    // TODO: Replace the code below with the appropriate login logic
    if (!!user.email && !!user.password) {
      console.log(`[LoginService] user ${user.email} logged in`);
      this._isUserLoggedIn = true;
    } else {
      console.log(`[LoginService] user ${user.email} NOT logged in, data missing`);
      this._isUserLoggedIn = false;
    }
    return of(this._isUserLoggedIn);  
   }

}
