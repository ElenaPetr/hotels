import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { SharedFavoriteHotelsService } from 'src/app/shared/services/favorites/shared-favorite-hotels.service';
import { switchMap } from 'rxjs/operators';
import { HttpFavoritesService } from 'src/app/shared/services/favorites/http-favorites.service';
import { Hotel } from 'src/app/models/hotel';
import { Store, select } from '@ngrx/store';
import { IRootState } from 'src/app/reducers';
import { DeleteFavoriteHotel, LoadFavoriteHotels } from './state/favorite-hotels.actions';

@Component({
  selector: 'app-favorite-hotels',
  templateUrl: './favorite-hotels.component.html',
  styleUrls: ['./favorite-hotels.component.scss', '../hotel-info/hotel-info.component.scss']
})
export class FavoriteHotelsComponent implements OnInit, OnDestroy {
  public favoriteHotels$: Observable<Hotel[]>;

  public constructor(
    private store: Store<IRootState>,
    private sharedFavoriteHotelsService: SharedFavoriteHotelsService,
    private httpFavoritesService: HttpFavoritesService) {
      this.favoriteHotels$ = this.store.pipe(select('favoriteHotels'));
  }

  public ngOnInit() {
    this.store.dispatch(LoadFavoriteHotels());
  }

  public ngOnDestroy() {
  }

  public deleteFavorite(id: number) {
    this.store.dispatch(DeleteFavoriteHotel({ id }));
  }
}
