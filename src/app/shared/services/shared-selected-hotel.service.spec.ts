import { TestBed } from '@angular/core/testing';

import { SharedSelectedHotelService } from './shared-selected-hotel.service';

describe('SharedSelectedHotelService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SharedSelectedHotelService = TestBed.get(SharedSelectedHotelService);
    expect(service).toBeTruthy();
  });
});
