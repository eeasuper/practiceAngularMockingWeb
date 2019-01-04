import { TestBed } from '@angular/core/testing';

import { AppSideBarService } from './app-side-bar.service';

describe('AppSideBarService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AppSideBarService = TestBed.get(AppSideBarService);
    expect(service).toBeTruthy();
  });
});
