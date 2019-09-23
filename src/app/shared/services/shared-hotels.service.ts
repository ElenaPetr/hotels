import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Hotel } from '../../models/hotel';
import { delay, tap, catchError } from 'rxjs/operators';
import { Star } from '../../models/stars';
import { environment } from 'src/environments/environment';
import { Observable, of } from 'rxjs';
import { STARS } from 'src/app/mock-data/stars';

@Injectable({
  providedIn: 'root'
})
export class SharedHotelsService {
  constructor(private http: HttpClient) { }

  public getHotels(): Observable<Hotel[]> {
    console.log(environment.api);
    return this.http.get<Hotel[]>(`${environment.api}/hotels`).pipe(
      catchError(() => {
        console.log('error');
        return of([]);
      })
    );
  }

  public getStars(): Observable<Star[]> {
    return this.http.get<Star[]>(`${environment.api}/stars`).pipe(
      tap(() => console.log('get stars')),
      delay(3000),
      catchError(() => {
        console.log('error');
        return of([]);
      })
    );
  }
}
