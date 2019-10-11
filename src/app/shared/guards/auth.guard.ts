import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Route, CanLoad } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AuthorizationLocalStorageService } from '../services/authorization-local-storage.service';
import { delay, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {

  constructor(
    private authorizationLocalStorageService: AuthorizationLocalStorageService,
  ) {

  }
  public canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return of(this.authorizationLocalStorageService.getAuthorizationToken('token')).pipe(
      map((token: string) => Boolean(token))
    );

  }
}
