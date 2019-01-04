import { TestBed, async, inject } from '@angular/core/testing';

import { AppSideBarGuard } from './app-side-bar.guard';

describe('AppSideBarGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppSideBarGuard]
    });
  });

  it('should ...', inject([AppSideBarGuard], (guard: AppSideBarGuard) => {
    expect(guard).toBeTruthy();
  }));
});
