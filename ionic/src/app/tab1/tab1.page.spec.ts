import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, TestBed } from '@angular/core/testing';

import { Tab1Page } from './tab1.page';

describe('Tab1Page', () => {

  let component: Tab1Page;

  beforeEach(async(() => TestBed.configureTestingModule({
    declarations: [
      Tab1Page
    ],
    schemas: [
      NO_ERRORS_SCHEMA
    ]
  }).compileComponents()));

  beforeEach(() => {
    component = TestBed.createComponent(Tab1Page).componentInstance;
  });

  it('should be defined', () => {
    expect(component).toBeDefined();
  });

});
