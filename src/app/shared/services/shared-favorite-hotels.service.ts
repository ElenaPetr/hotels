import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Hotel } from '../../models/hotel';
import { take } from 'rxjs/operators';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class SharedFavoriteHotelsService {

  private favoriteHotelsSource: BehaviorSubject<Hotel[]>;
  // tslint:disable-next-line: member-ordering
  public favoriteHotels$: Observable<Hotel[]>;

  constructor(private localStorageService: LocalStorageService) {
    this.favoriteHotelsSource = new BehaviorSubject<Hotel[]>(this.localStorageService.getFavoriteHotels());
    this.favoriteHotels$ = this.favoriteHotelsSource.asObservable();
  }

  public init(): Observable<Hotel[]> {
    return this.favoriteHotels$;

  }

  public addFavoriteHotel(hotel: Hotel) {
    this.localStorageService.addFavoriteHotel(hotel);
    this.favoriteHotelsSource.next(this.localStorageService.getFavoriteHotels());
  }

  public deleteFavoriteHotel(id: number) {
    this.localStorageService.removeFavoriteHotel(id);
    this.favoriteHotelsSource.next(this.localStorageService.getFavoriteHotels());
  }


}
