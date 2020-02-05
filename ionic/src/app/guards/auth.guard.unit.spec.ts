import { Router } from '@angular/router';

import { LoginService } from '../services/login.service';
import { AuthGuard } from './auth.guard';

describe('AuthGuard', () => {

  let service: AuthGuard;

  const mockLoginService: LoginService = {} as LoginService;
  const mockRouter: Router = {} as Router;

  beforeEach(() => {
    service = new AuthGuard(mockLoginService, mockRouter);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

});
