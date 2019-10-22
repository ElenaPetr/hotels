import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Hotel } from 'src/app/models/hotel';

@Injectable({
  providedIn: 'root'
})
export class HttpFavoritesService {

  public url = `${environment.api}/favorites`;

  constructor(private http: HttpClient) { }

  public getFavorites(): Observable<Hotel[]> {
    return this.http.get<Hotel[]>(this.url).pipe(
      catchError(() => {
        console.log('error');
        return of([]);
      })
    );
  }

  public addFavoriteHotel(hotel: Hotel): Observable<Hotel> {
    return this.http.post<Hotel>(this.url, hotel).pipe(
      catchError(this.handleError<Hotel>('addFavoriteHotel'))
    );
  }

  public updateFollowers(id: number, vote: number): Observable<Hotel> {
    const httpParams = new HttpParams().append('_embed', 'profile');
    const body = { followers: vote };
    return this.http.patch<Hotel>(`${this.url}/${id}`, body, { params: httpParams })
      .pipe(
        catchError(this.handleError<Hotel>('updateFollowers'))
      );
  }

  public deleteFavorite(id: number): Observable<Hotel> {
    return this.http.delete<Hotel>(`${this.url}/${id}`).pipe(
      tap(_ => console.log(`deleted favorite id=${id}`)),
      catchError(this.handleError<Hotel>('deleteFavorive'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
