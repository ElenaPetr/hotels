import { Component, OnInit, Input, EventEmitter, Output, OnDestroy } from '@angular/core';
import { Hotel } from 'src/app/models/hotel';
import { SharedFavoriteHotelsService } from 'src/app/shared/services/shared-favorite-hotels.service';
import { Subscription } from 'rxjs';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-hotel-info',
  templateUrl: './hotel-info.component.html',
  styleUrls: ['./hotel-info.component.scss']
})
export class HotelInfoComponent implements OnInit, OnDestroy {

  @Input() public hotel: Hotel;

  public favoriteHotels: Hotel[];

  public favoriteHotelsSubscription: Subscription;

  constructor(
    private snackBar: MatSnackBar,
    private sharedFavoriteHotelsService: SharedFavoriteHotelsService
  ) {
    this.favoriteHotelsSubscription = this.sharedFavoriteHotelsService.favoriteHotels$
      .subscribe(hotels => {
        this.favoriteHotels = hotels;
      }
      );
  }

  public ngOnInit() {
  }
  public ngOnDestroy() {
    this.favoriteHotelsSubscription.unsubscribe();
  }

  public addToFavorite(hotel: Hotel, event: Event) {
    event.stopPropagation();
    if (this.favoriteHotels.length > 0 && this.favoriteHotels.some((el: Hotel) => el.id === hotel.id)) {
      this.openSnackBar('Hotel is in favorite', 'close');
    } else {
      this.sharedFavoriteHotelsService.addFavoriteHotel(hotel);
    }
  }

  public openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

}
