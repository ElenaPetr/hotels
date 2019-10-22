import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError, tap, switchMap } from 'rxjs/operators';
import { HttpFavoritesService } from 'src/app/shared/services/favorites/http-favorites.service';
import { EMPTY } from 'rxjs';
import { AddFavoriteHotel, LoadFavoriteHotels, LoadFavoriteHotelsSuccess, DeleteFavoriteHotel } from './favorite-hotels.actions';

@Injectable()
export class FavoriteEffects {

  public loadFavorites$ = createEffect(() => this.actions$.pipe(
    ofType(LoadFavoriteHotels),
    mergeMap(() => this.httpFavoritesService.getFavorites()
      .pipe(
        tap(favorites => console.log('effects get favorites works', favorites)),
        map(favorites => (LoadFavoriteHotelsSuccess({ favorites })),
          catchError(() => EMPTY)
        ))
    )));

  public addToFavorites$ = createEffect(() => this.actions$.pipe(
    ofType(AddFavoriteHotel),
    mergeMap((hotel) => this.httpFavoritesService.addFavoriteHotel(hotel.hotel)
      .pipe(
        switchMap(() => this.httpFavoritesService.getFavorites()),
        map(favorites => (LoadFavoriteHotelsSuccess({ favorites })),
          catchError(() => EMPTY)
        ))
    )));

    public deleteFromFavorites$ = createEffect(() => this.actions$.pipe(
      ofType(DeleteFavoriteHotel),
      mergeMap((id) => this.httpFavoritesService.deleteFavorite(id.id)
        .pipe(
          switchMap(() => this.httpFavoritesService.getFavorites()),
          map(favorites => (LoadFavoriteHotelsSuccess({ favorites })),
            catchError(() => EMPTY)
          ))
      )));

  constructor(
    private actions$: Actions,
    private httpFavoritesService: HttpFavoritesService) { }

}
