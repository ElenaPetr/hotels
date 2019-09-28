import { TestBed } from '@angular/core/testing';

import { AuthorizationLocalStorageService } from './authorization-local-storage.service';

describe('AuthorizationLocalStorageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthorizationLocalStorageService = TestBed.get(AuthorizationLocalStorageService);
    expect(service).toBeTruthy();
  });
});
