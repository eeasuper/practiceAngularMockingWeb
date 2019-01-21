import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppSideBar2Component } from './app-side-bar2.component';

describe('AppSideBar2Component', () => {
  let component: AppSideBar2Component;
  let fixture: ComponentFixture<AppSideBar2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppSideBar2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppSideBar2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
