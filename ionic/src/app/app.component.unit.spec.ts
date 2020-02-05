import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, TestBed } from '@angular/core/testing';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Platform } from '@ionic/angular';

import { AppComponent } from './app.component';

describe('AppComponent', () => {

  let component: AppComponent;

  const mockPlatform: jasmine.SpyObj<Platform> = jasmine.createSpyObj(['ready']);
  mockPlatform.ready.and.returnValue(Promise.resolve(''));
  const mockSplashScreen: jasmine.SpyObj<SplashScreen> = jasmine.createSpyObj(['hide']);
  const mockStatusBar: jasmine.SpyObj<StatusBar> = jasmine.createSpyObj(['styleDefault']);

  beforeEach(async(() => TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      providers: [
        { provide: Platform, useValue: mockPlatform },
        { provide: SplashScreen, useValue: mockSplashScreen },
        { provide: StatusBar, useValue: mockStatusBar },
      ],
      schemas: [
        NO_ERRORS_SCHEMA
      ]
    }).compileComponents()));

  beforeEach(() => {
    component = TestBed.createComponent(AppComponent).componentInstance;
  });

  it('should be defined', () => {
    expect(component).toBeDefined();
  });

});
