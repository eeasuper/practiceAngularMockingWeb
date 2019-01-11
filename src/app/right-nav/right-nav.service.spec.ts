import { TestBed } from '@angular/core/testing';

import { RightNavService } from './right-nav.service';

describe('RightNavService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RightNavService = TestBed.get(RightNavService);
    expect(service).toBeTruthy();
  });
});
