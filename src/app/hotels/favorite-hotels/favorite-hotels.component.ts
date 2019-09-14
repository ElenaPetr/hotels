import { Component, OnInit, OnDestroy } from '@angular/core';
import { Hotel } from 'src/app/models/hotel';
import { Observable } from 'rxjs';
import { SharedFavoriteHotelsService } from 'src/app/shared/services/shared-favorite-hotels.service';
import { delay, tap } from 'rxjs/operators';

@Component({
  selector: 'app-favorite-hotels',
  templateUrl: './favorite-hotels.component.html',
  styleUrls: ['./favorite-hotels.component.scss', '../hotel-info/hotel-info.component.scss']
})
export class FavoriteHotelsComponent implements OnInit, OnDestroy {

  public favoriteHotels: Hotel[];
  public favoriteHotels$: Observable<Hotel[]>;

  public constructor(
    private sharedFavoriteHotelsService: SharedFavoriteHotelsService) {
  }

  public ngOnInit() {
    this.favoriteHotels$ = this.sharedFavoriteHotelsService.init();
  }

  public ngOnDestroy() {
  }

  public deleteFavorite(id: number) {
    this.sharedFavoriteHotelsService.deleteFavoriteHotel(id);
  }
}
