import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, TestBed } from '@angular/core/testing';

import { Tab3Page } from './tab3.page';

describe('Tab3Page', () => {

  let component: Tab3Page;

  beforeEach(async(() => TestBed.configureTestingModule({
    declarations: [
      Tab3Page
    ],
    schemas: [
      NO_ERRORS_SCHEMA
    ]
  }).compileComponents()));

  beforeEach(() => {
    component = TestBed.createComponent(Tab3Page).componentInstance;
  });

  it('should be defined', () => {
    expect(component).toBeDefined();
  });

});
