import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Hotel } from 'src/app/models/hotel';
import { Star } from 'src/app/models/stars';
import { Observable, Subscription, combineLatest, of } from 'rxjs';
import { SharedHotelsService } from 'src/app/shared/services/shared-hotels.service';
import { SharedSelectedHotelService } from 'src/app/shared/services/shared-selected-hotel.service';
import { PageEvent } from '@angular/material';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { tap, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-hotels-list',
  templateUrl: './hotels-list.component.html',
  styleUrls: ['./hotels-list.component.scss']
})
export class HotelsListComponent implements OnInit, OnDestroy {

  @Input() public filterString: string;

  public params: Partial<PageEvent> = {
    pageSize: 3,
    pageIndex: 0
  };

  public picture: string;
  public selectedHotel: Hotel;

  public starValue = '';

  public length: number;
  // public pageSize = 3;
  public pageSizeOptions: number[] = [3, 5];

  public hotels$: Observable<Hotel[]>;
  public stars$: Observable<Star[]>;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private sharedHotelsService: SharedHotelsService,
    private sharedSelectedHotelService: SharedSelectedHotelService
  ) {
    this.hotels$ = combineLatest(this.sharedSelectedHotelService.selectedHotel$,
      this.route.queryParams).pipe(
        switchMap(result => {
          if (result[1]) {
            this.params.pageIndex = result[1].pageIndex - 1;
            this.params.pageSize = result[1].pageSize;
            return this.sharedHotelsService.getHotels(this.params).pipe(
              tap((hotels: Hotel[]) => {
                if (!result[0]) {
                  this.selectHotel(hotels[0]);
                }
                this.selectedHotel = result[0];
              })
            );
          } else {
            this.params.pageIndex = this.params.pageIndex + 1;
            return this.sharedHotelsService.getHotels(this.params).pipe(
              tap((hotels: Hotel[]) => {
                if (!result[0]) {
                  this.selectHotel(hotels[0]);
                }
                this.selectedHotel = result[0];
              }));
          }
        })
      );
  }

  public ngOnInit() {
    this.sharedHotelsService.getAllHotels().subscribe(hotels => {
      this.length = hotels.length;
    });

    this.stars$ = this.sharedHotelsService.getStars();
  }

  public ngOnDestroy() { }

  public toHotelDetail(hotel: Hotel) {
    this.selectHotel(hotel);
    this.router.navigate(['hotel', hotel.id]);
  }

  public selectStarValue(starValue: string) {
    this.starValue = starValue;
  }

  public selectHotel(hotel: Hotel) {
    this.sharedSelectedHotelService.setSelectedHotel(hotel);
  }

  public goToPage(event: PageEvent) {
    this.params.pageIndex = event.pageIndex + 1;
    this.params.pageSize = event.pageSize;
    this.router.navigate([], {
      skipLocationChange: false,
      replaceUrl: true,
      relativeTo: this.route,
      queryParams: this.params,
    });
  }

  public deleteHotel(event: number) {
    this.sharedHotelsService.deleteHotel(event).subscribe();
    this.hotels$ = this.sharedHotelsService.getHotels(this.params);
  }

  public isSelected(hotelId: number): boolean {
    return hotelId === this.selectedHotel.id;
  }

}
