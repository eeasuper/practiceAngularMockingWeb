import { TestBed } from '@angular/core/testing';

import { WindowResizeService } from './window-resize.service';

describe('WindowResizeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WindowResizeService = TestBed.get(WindowResizeService);
    expect(service).toBeTruthy();
  });
});
