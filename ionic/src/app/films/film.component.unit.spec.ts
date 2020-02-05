import { of } from 'rxjs';

import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';

import { DataService } from '../services/data.service';
import { FilmComponent } from './film.component';

describe('FilmComponent', () => {

  let component: FilmComponent;

  const mockActivatedRoute: ActivatedRoute = {
    paramMap: of()
  } as ActivatedRoute;

  beforeEach(async(() => TestBed.configureTestingModule({
    declarations: [
      FilmComponent
    ],
    providers: [
      { provide: ActivatedRoute, useValue: mockActivatedRoute },
      { provide: DataService, useValue: {} }
    ],
    schemas: [
      NO_ERRORS_SCHEMA
    ]
  }).compileComponents()));

  beforeEach(() => {
    component = TestBed.createComponent(FilmComponent).componentInstance;
  });

  it('should be defined', () => {
    expect(component).toBeDefined();
  });

});
