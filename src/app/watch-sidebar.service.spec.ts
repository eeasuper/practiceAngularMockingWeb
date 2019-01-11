import { TestBed } from '@angular/core/testing';

import { WatchSidebarService } from './watch-sidebar.service';

describe('WatchSidebarService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WatchSidebarService = TestBed.get(WatchSidebarService);
    expect(service).toBeTruthy();
  });
});
