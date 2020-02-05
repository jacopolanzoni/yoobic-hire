import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FilmComponent } from './film.component';

describe('FilmComponent', () => {

  let component: FilmComponent;

  beforeEach(async(() => TestBed.configureTestingModule({
    declarations: [
      FilmComponent
    ],
    imports: [
      IonicModule.forRoot()
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
