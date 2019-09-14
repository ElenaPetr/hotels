import { Injectable } from '@angular/core';
import { Subject, of, Observable, BehaviorSubject } from 'rxjs';
import { Hotel } from '../../models/hotel';
import { take } from 'rxjs/operators';
import { FAVORITEHOTELS } from '../../mock-data/favorite-hotels';

@Injectable({
  providedIn: 'root'
})
export class SharedFavoriteHotelsService {

  private favoriteHotels: Hotel[] = FAVORITEHOTELS;
  private favoriteHotelsSource = new BehaviorSubject<Hotel[]>(this.favoriteHotels);
  // tslint:disable-next-line: member-ordering
  public favoriteHotelsHotel$ = this.favoriteHotelsSource.asObservable();

  public addFavoriteHotel(hotel: Hotel) {
    this.favoriteHotelsHotel$.pipe(take(1)).subscribe(val => {
      if (!val.find(el => el.id === hotel.id)) {
        const newArr = [...val, hotel];
        this.favoriteHotelsSource.next(newArr);
      }
    });
  }

  public deleteFavoriteHotel(id: number) {
    this.favoriteHotelsHotel$.pipe(take(1)).subscribe(val => {
      const newArr = val.filter((el: Hotel) => el.id !== id);
      this.favoriteHotelsSource.next(newArr);
    });
  }


}
