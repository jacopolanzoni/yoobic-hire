import { of } from 'rxjs';

import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';

import { DataService } from '../services/data.service';
import { FilmsComponent } from './films.component';

describe('FilmsComponent', () => {

  let component: FilmsComponent;

  const mockDataService: jasmine.SpyObj<DataService> = jasmine.createSpyObj(['getStarWarsFilms']);
  mockDataService.getStarWarsFilms.and.returnValue(of());

  beforeEach(async(() => TestBed.configureTestingModule({
    declarations: [
      FilmsComponent
    ],
    providers: [
      { provide: DataService, useValue: mockDataService },
      { provide: Router, useValue: {} }
    ],
    schemas: [
      NO_ERRORS_SCHEMA
    ]
  }).compileComponents()));

  beforeEach(() => {
    component = TestBed.createComponent(FilmsComponent).componentInstance;
  });

  it('should be defined', () => {
    expect(component).toBeDefined();
  });

});
