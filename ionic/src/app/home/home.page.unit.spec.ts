import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, TestBed } from '@angular/core/testing';

import { HomePage } from './home.page';

describe('HomePage', () => {

  let component: HomePage;

  beforeEach(async(() => TestBed.configureTestingModule({
    declarations: [
      HomePage
    ],
    schemas: [
      NO_ERRORS_SCHEMA
    ]
  }).compileComponents()));

  beforeEach(() => {
    component = TestBed.createComponent(HomePage).componentInstance;
  });

  it('should be defined', () => {
    expect(component).toBeDefined();
  });

});
