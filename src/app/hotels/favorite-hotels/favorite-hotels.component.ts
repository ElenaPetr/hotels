import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { SharedFavoriteHotelsService } from 'src/app/shared/services/favorites/shared-favorite-hotels.service';
import { switchMap } from 'rxjs/operators';
import { HttpFavoritesService } from 'src/app/shared/services/favorites/http-favorites.service';
import { Hotel } from 'src/app/models/hotel';

@Component({
  selector: 'app-favorite-hotels',
  templateUrl: './favorite-hotels.component.html',
  styleUrls: ['./favorite-hotels.component.scss', '../hotel-info/hotel-info.component.scss']
})
export class FavoriteHotelsComponent implements OnInit, OnDestroy {

  public favoriteHotels: Hotel[];
  public favoriteSubscription: Subscription;

  public constructor(
    private sharedFavoriteHotelsService: SharedFavoriteHotelsService,
    private httpFavoritesService: HttpFavoritesService) {
    this.getFavorites();
    this.favoriteSubscription = this.sharedFavoriteHotelsService.favorites$.subscribe(favorites => {
      this.favoriteHotels = favorites;
      console.log('from favoritSubscription', this.favoriteHotels);
    });
  }

  public ngOnInit() {
  }

  public getFavorites(): void {
    this.httpFavoritesService.getFavorites().subscribe(favorites => {
      console.log(favorites);
      this.favoriteHotels = favorites;
    });
  }


  public ngOnDestroy() {
    this.favoriteSubscription.unsubscribe();
  }

  public deleteFavorite(id: number) {
    this.httpFavoritesService.deleteFavorive(id).pipe(
      switchMap(() => this.httpFavoritesService.getFavorites())).subscribe(f => {
        console.log(f);
        this.sharedFavoriteHotelsService.setFavorites(f);
      });
  }
}
