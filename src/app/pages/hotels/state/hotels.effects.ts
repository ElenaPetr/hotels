import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError, tap, switchMap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
// tslint:disable-next-line: max-line-length
import { LoadHotels, LoadHotelsSuccess, LoadHotelsError } from './hotels.actions';
import { SharedHotelsService } from 'src/app/shared/services/shared-hotels.service';
import { PageEvent } from '@angular/material';

@Injectable()
export class HotelsEffects {

  public loadHotels$ = createEffect(() => this.actions$.pipe(
    ofType(LoadHotels),
    mergeMap(page => this.sharedHotelsService.getHotels(page.page)
      .pipe(
        tap(hotels => console.log('effects hotels works', hotels)),
        map(hotels => (LoadHotelsSuccess({ hotels })),
          catchError(() => EMPTY)
        )))
  )
  );

  constructor(
    private actions$: Actions,
    private sharedHotelsService: SharedHotelsService) { }

}
