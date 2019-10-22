import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { FavoriteEffects } from './favorite.effects';

describe('FavoriteEffects', () => {
  let actions$: Observable<any>;
  let effects: FavoriteEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        FavoriteEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get<FavoriteEffects>(FavoriteEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
