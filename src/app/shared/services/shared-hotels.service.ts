import { Injectable } from '@angular/core';
import { HOTELS } from '../../mock-data/hotels';
import { Hotel } from '../../models/hotel';
import { Observable, of } from 'rxjs';
import { delay, tap } from 'rxjs/operators';
import { Star } from '../../models/stars';
import { STARS } from '../../mock-data/stars';

@Injectable({
  providedIn: 'root'
})
export class SharedHotelsService {
  private hotels: Hotel[] = HOTELS;
  private stars: Star[] = STARS;

  constructor() { }

  public getHotels(): Observable<Hotel[]> {
    return of(this.hotels).pipe(
      tap(() => console.log('get hotels')),
      delay(3000)
    );
  }

  public getStars(): Observable<Star[]> {
    return of(this.stars).pipe(
      tap(() => console.log('get stars')),
      delay(3000)
    );
  }
}
