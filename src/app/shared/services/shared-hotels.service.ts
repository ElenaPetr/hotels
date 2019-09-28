import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Hotel } from '../../models/hotel';
import { delay, tap, catchError } from 'rxjs/operators';
import { Star } from '../../models/stars';
import { environment } from 'src/environments/environment';
import { Observable, of } from 'rxjs';
import { PageEvent } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class SharedHotelsService {

  public url = `${environment.api}/hotels`;

  constructor(private http: HttpClient) { }

  public getAllHotels() {
    return this.http.get<Hotel[]>(`${environment.api}/hotels`).pipe(
      catchError(() => {
        console.log('error');
        return of([]);
      })
    );
  }

  public getHotels(params: Partial<PageEvent>): Observable<Hotel[]> {
    const httpParams: HttpParams = new HttpParams({
      fromObject: {
        _page: String(params.pageIndex),
        _limit: String(params.pageSize)
      }
    });
    console.log(environment.api);
    return this.http.get<Hotel[]>(`${environment.api}/hotels`, { params: httpParams }).pipe(
      catchError(() => {
        console.log('error');
        return of([]);
      })
    );
  }

  public deleteHotel(id: number): Observable<{}> {
    return this.http.delete(`${this.url}/${id}`).pipe(
      tap(() => console.log('get stars')),
      delay(3000),
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
