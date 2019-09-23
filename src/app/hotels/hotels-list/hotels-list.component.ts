import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Hotel } from 'src/app/models/hotel';
import { Star } from 'src/app/models/stars';
import { Observable, Subscription } from 'rxjs';
import { SharedHotelsService } from 'src/app/shared/services/shared-hotels.service';
import { tap } from 'rxjs/operators';
import { SharedSelectedHotelService } from 'src/app/shared/services/shared-selected-hotel.service';

@Component({
  selector: 'app-hotels-list',
  templateUrl: './hotels-list.component.html',
  styleUrls: ['./hotels-list.component.scss']
})
export class HotelsListComponent implements OnInit, OnDestroy {

  @Input() public filterString: string;
  public picture: string;
  public selectedHotel: Hotel;

  public starValue = '';
  public hotels$: Observable<Hotel[]>;
  public stars$: Observable<Star[]>;

  public selectedHotelSubscription: Subscription;

  constructor(
    private sharedHotelsService: SharedHotelsService,
    private sharedSelectedHotelService: SharedSelectedHotelService
  ) {
    this.selectedHotelSubscription = this.sharedSelectedHotelService.selectedHotel$
      .subscribe((hotel: Hotel) => {
        this.selectedHotel = hotel;
      });
  }

  public ngOnInit() {
    // this.hotels$ = this.sharedHotelsService.getHotels();
    this.hotels$ = this.sharedHotelsService.getHotels().pipe(tap((hotels: Hotel[]) => {
      this.selectHotel(hotels[0]);
    }
      ));
    this.stars$ = this.sharedHotelsService.getStars();
  }

  public ngOnDestroy() {
    this.selectedHotelSubscription.unsubscribe();
  }

  public selectHotel(hotel: Hotel) {
    this.sharedSelectedHotelService.setSelectedHotel(hotel);
  }

  public selectStarValue(starValue: string) {
    this.starValue = starValue;
  }

}
