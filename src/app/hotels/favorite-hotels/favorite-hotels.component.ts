import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Hotel } from 'src/app/models/hotel';
import { Observable, Subscription, of } from 'rxjs';
import { SharedHotelsService } from 'src/app/shared/services/shared-hotels.service';
import { tap } from 'rxjs/operators';
import { SharedFavoriteHotelsService } from 'src/app/shared/services/shared-favorite-hotels.service';

@Component({
  selector: 'app-favorite-hotels',
  templateUrl: './favorite-hotels.component.html',
  styleUrls: ['./favorite-hotels.component.scss', '../hotel-info/hotel-info.component.scss']
})
export class FavoriteHotelsComponent implements OnInit {

  public favoriteHotels$: Observable<Hotel[]>;

  public favoriteHotelSubscription: Subscription;
  @Output() public delete: EventEmitter<number> = new EventEmitter();

  public constructor(
    private sharedHotelsService: SharedHotelsService,
    private sharedFavoriteHotelsService: SharedFavoriteHotelsService) {
    this.favoriteHotelSubscription = this.sharedFavoriteHotelsService.favoriteHotelsHotel$.
      subscribe(hotels => this.favoriteHotels$ = of(hotels));
  }

  public ngOnInit() {
    this.favoriteHotels$ = this.sharedHotelsService.getFavoriveHotels();
  }

  public deleteFavorite(id: number) {
    this.sharedFavoriteHotelsService.deleteFavoriteHotel(id);
  }
}
