import { Injectable } from '@angular/core';
import { HttpRequest, HttpInterceptor, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthorizationLocalStorageService } from './authorization-local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {

  constructor(private authorizationLocalStorageService: AuthorizationLocalStorageService) {}

  public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const token: string = this.authorizationLocalStorageService.getAuthorizationToken('token');

    if (!req.headers.has('Content-Type')) {
      req = req.clone({ headers: req.headers.set('Content-Type', 'application/json') });
    }

    req = req.clone({ headers: req.headers.set('Accept', 'application/json') });

    if ((req.method === 'POST' || req.method === 'DELETE' || req.method === 'PUT') && req.url.includes('hotels')) {
      req = req.clone({
        headers: req.headers.set('Authorization', token)
      });
    }

    return next.handle(req).pipe(catchError((error: HttpErrorResponse) => throwError(error)));
  }
}
