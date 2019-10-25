import { Component, Input, OnDestroy, Output, EventEmitter, OnInit } from '@angular/core';
import { Hotel } from 'src/app/models/hotel';
import { SharedFavoriteHotelsService } from 'src/app/shared/services/favorites/shared-favorite-hotels.service';
import { Subscription, Observable } from 'rxjs';
import { MatSnackBar, MatDialog } from '@angular/material';
import { HttpFavoritesService } from 'src/app/shared/services/favorites/http-favorites.service';
import { switchMap, tap } from 'rxjs/operators';
import { DeleteHotelModalComponent } from 'src/app/fragments/modals/delete-hotel-modal/delete-hotel-modal.component';
import { SharedHotelsService } from 'src/app/shared/services/shared-hotels.service';
import { AuthorizationLocalStorageService } from 'src/app/shared/services/authorization-local-storage.service';
import { AddFavoriteHotel } from '../favorite-hotels/state/favorite-hotels.actions';
import { Store, select } from '@ngrx/store';
import { IRootState } from 'src/app/reducers';

@Component({
  selector: 'app-hotel-info',
  templateUrl: './hotel-info.component.html',
  styleUrls: ['./hotel-info.component.scss']
})
export class HotelInfoComponent implements OnInit, OnDestroy {

  @Input() public hotel: Hotel;
  @Output() public delete: EventEmitter<string> = new EventEmitter();

  public favoriteHotels: Hotel[];
  public favoriteSubscription: Subscription;

  constructor(
    private store: Store<IRootState>,
    private snackBar: MatSnackBar,
    private sharedFavoriteHotelsService: SharedFavoriteHotelsService,
    private httpFavoritesService: HttpFavoritesService,
    private authorizationLocalStorageService: AuthorizationLocalStorageService,
    public dialog: MatDialog,
  ) { }

  public ngOnInit() {
    this.favoriteSubscription = this.store.pipe(select('favoriteHotels')).subscribe(hotels => {
      this.favoriteHotels = hotels;
    });
  }

  public ngOnDestroy() {
    this.favoriteSubscription.unsubscribe();
  }

  public addToFavorite(hotel: Hotel, event: Event): void {
    event.stopPropagation();
    if (this.favoriteHotels && this.favoriteHotels.some((el: Hotel) => el.title === hotel.title)) {
      this.openSnackBar('Hotel is in favorite', 'close');
    } else {
      this.store.dispatch(AddFavoriteHotel({ hotel }));
    }
  }


  public openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

  public deleteHotel(hotel: Hotel, event: Event) {
    event.stopPropagation();
    this.openDialog(hotel);
  }

  public editHotel(hotel: Hotel, event: Event) {
    event.stopPropagation();
  }

  public openDialog(hotel: Hotel): void {
    const dialogRef = this.dialog.open(DeleteHotelModalComponent, {
      width: '250px',
      data: { title: hotel.title, id: hotel.id }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.delete.emit(result);
      }
    });
  }

  public isAdmin() {
    return this.authorizationLocalStorageService.getAuthorizationToken('token');
  }

}
