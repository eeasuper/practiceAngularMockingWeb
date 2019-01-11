import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LisComponent } from './lis.component';

describe('LisComponent', () => {
  let component: LisComponent;
  let fixture: ComponentFixture<LisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
