import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';

import { LoginService } from '../services/login.service';
import { LoginPage } from './login.page';

describe('LoginPage', () => {

  let component: LoginPage;

  beforeEach(async(() => TestBed.configureTestingModule({
    declarations: [ 
      LoginPage
    ],
    providers: [
      { provide: LoginService, useValue: {} },
      { provide: Router, useValue: {} }
    ],
    schemas: [
      NO_ERRORS_SCHEMA
    ]
  }).compileComponents()));

  beforeEach(() => {
    component = TestBed.createComponent(LoginPage).componentInstance;
  });

  it('should be defined', () => {
    expect(component).toBeDefined();
  });

});
