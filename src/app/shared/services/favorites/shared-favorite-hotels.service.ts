import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Hotel } from 'src/app/models/hotel';

@Injectable({
  providedIn: 'root'
})
export class SharedFavoriteHotelsService {

  public favorites$: Observable<Hotel[]>;
  private favoriteHotelsSource = new Subject<Hotel[]>();

  constructor() {
    this.favorites$ = this.favoriteHotelsSource.asObservable();
  }

  public setFavorites(favoriteHotels: Hotel[]) {
    this.favoriteHotelsSource.next(favoriteHotels);
  }

}
