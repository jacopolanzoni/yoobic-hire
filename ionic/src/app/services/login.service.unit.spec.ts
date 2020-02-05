import { LoginService } from '../services/login.service';

describe('LoginService', () => {

  let service: LoginService;

  beforeEach(() => {
    service = new LoginService();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

});
