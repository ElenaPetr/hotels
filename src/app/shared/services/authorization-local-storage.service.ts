import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationLocalStorageService {

  public key: string = 'token';
  public value: string = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9';

  constructor() { }

  public setAuthorizationToken(): void {
    if (window.localStorage) {
      localStorage.setItem(this.key, this.value);
    } else {
       console.error('Local storage not supported');
    }
  }

  public getAuthorizationToken(key: string) {
    return localStorage.getItem(key);
  }

  public removeAuthorizationToken() {
    localStorage.removeItem(this.key);
  }

}
