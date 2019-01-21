import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavItem2Component } from './nav-component2.component';

describe('NavComponent2Component', () => {
  let component: NavItem2Component;
  let fixture: ComponentFixture<NavItem2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavItem2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavItem2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
