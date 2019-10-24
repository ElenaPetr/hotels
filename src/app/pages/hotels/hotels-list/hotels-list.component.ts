import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Hotel } from 'src/app/models/hotel';
import { Star } from 'src/app/models/stars';
import { Observable, Subscription, combineLatest, of } from 'rxjs';
import { SharedHotelsService } from 'src/app/shared/services/shared-hotels.service';
import { SharedSelectedHotelService } from 'src/app/shared/services/shared-selected-hotel.service';
import { PageEvent } from '@angular/material';
import { Router, ActivatedRoute, Params, ParamMap } from '@angular/router';
import { tap, switchMap } from 'rxjs/operators';
import { Store, select } from '@ngrx/store';
import { IRootState } from 'src/app/reducers';
import { LoadHotels } from '../state/hotels.actions';

@Component({
  selector: 'app-hotels-list',
  templateUrl: './hotels-list.component.html',
  styleUrls: ['./hotels-list.component.scss']
})
export class HotelsListComponent implements OnInit {

  @Input() public filterString: string;

  public params: Partial<PageEvent> = {
    pageSize: 3,
    pageIndex: 1
  };

  public picture: string;
  public selectedHotel: Hotel;

  public starValue = '';

  public length: number;
  public pageSizeOptions: number[] = [3, 5];

  public hotels$: Observable<Hotel[]>;
  public stars$: Observable<Star[]>;


  constructor(
    private store: Store<IRootState>,
    private router: Router,
    private route: ActivatedRoute,
    private sharedHotelsService: SharedHotelsService,
    private sharedSelectedHotelService: SharedSelectedHotelService
  ) { this.hotels$ = this.store.pipe(select('hotels')); }

  public ngOnInit() {
    this.sharedHotelsService.getAllHotels().subscribe(hotels => {
      this.length = hotels.length;
    });

    this.stars$ = this.sharedHotelsService.getStars();
    this.fetchHotels();
  }

  public fetchHotels(): void {
    console.log('fetchHotels');
    this.route.queryParamMap.subscribe(param => {
      if (param.has('pageIndex')) {
        this.params.pageIndex = Number(param.get('pageIndex'));
        this.params.pageSize = Number(param.get('pageSize'));
      }
      console.log('fetchHotels', this.params);
      this.store.dispatch(LoadHotels({ page: this.params }));
    });
  }

  public pageIndex() {
    return this.params.pageIndex - 1;
  }

  public toHotelDetail(hotel: Hotel) {
    this.selectHotel(hotel);
    this.router.navigate(['hotels', hotel.id]);
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
    this.router.navigate([],
      {
        relativeTo: this.route,
        queryParams: this.params
      });
    this.fetchHotels();
  }

  public deleteHotel(event: number) {
    this.sharedHotelsService.deleteHotel(event).subscribe();
    this.hotels$ = this.sharedHotelsService.getHotels(this.params);
  }

}
