import { TestBed } from '@angular/core/testing';

import { SharedFavoriteHotelsService } from './shared-favorite-hotels.service';

describe('SharedFavoriteHotelsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SharedFavoriteHotelsService = TestBed.get(SharedFavoriteHotelsService);
    expect(service).toBeTruthy();
  });
});
