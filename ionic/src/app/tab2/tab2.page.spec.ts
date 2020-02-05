import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, TestBed } from '@angular/core/testing';

import { Tab2Page } from './tab2.page';

describe('Tab2Page', () => {

  let component: Tab2Page;

  beforeEach(async(() => TestBed.configureTestingModule({
    declarations: [
      Tab2Page
    ],
    schemas: [
      NO_ERRORS_SCHEMA
    ]
  }).compileComponents()));

  beforeEach(() => {
    component = TestBed.createComponent(Tab2Page).componentInstance;
  });

  it('should be defined', () => {
    expect(component).toBeDefined();
  });

});
