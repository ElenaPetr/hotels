import { TestBed } from '@angular/core/testing';

import { HttpFavoritesService } from './http-favorites.service';

describe('HttpFavoritesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HttpFavoritesService = TestBed.get(HttpFavoritesService);
    expect(service).toBeTruthy();
  });
});
