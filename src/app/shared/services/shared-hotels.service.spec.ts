import { TestBed } from '@angular/core/testing';

import { SharedHotelsService } from './shared-hotels.service';

describe('SharedHotelsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SharedHotelsService = TestBed.get(SharedHotelsService);
    expect(service).toBeTruthy();
  });
});
