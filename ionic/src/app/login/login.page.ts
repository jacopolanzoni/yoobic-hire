import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../interfaces/user.interace';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})
export class LoginPage {

  constructor(
    private readonly loginService: LoginService,
    private readonly router: Router
  ) {}

  public user: User = {
    email: undefined,
    password: undefined
  };

  public onSubmit(): void {
    this.loginService.logUserIn(this.user).subscribe((hasLoggedIn: boolean) => {
      if (hasLoggedIn) {
        this.router.navigate(['/']);
      }
    });
  }

}
