import { TestBed } from '@angular/core/testing';

import { ChangeSidenavService } from './change-sidenav.service';

describe('ChangeSidenavService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChangeSidenavService = TestBed.get(ChangeSidenavService);
    expect(service).toBeTruthy();
  });
});
