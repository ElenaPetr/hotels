import { Injectable } from '@angular/core';
import { Hotel } from 'src/app/models/hotel';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  private key: 'favoriteHotels';

  constructor() {
    if (!!localStorage.getItem('favoriteHotels') === false) {
      this.setFavoriteHotels(JSON.stringify([]));
    }
  }

  public setFavoriteHotels(value: string | Hotel[]): void {
    value = typeof value === 'string' ? value : JSON.stringify(value);
    if (window.localStorage) {
      localStorage.setItem('favoriteHotels', value);
    } else {
      console.error('Local storage not supported');
    }
  }

  public getFavoriteHotels(): Hotel[] {
    const item = localStorage.getItem('favoriteHotels');
    return typeof item === 'string' ? JSON.parse(item) : item;
  }

  public addFavoriteHotel(hotel: Hotel) {
    console.log('addFavoriteHotel', hotel);
    const test = this.getFavoriteHotels();
    console.log(typeof test);
    test.push(hotel);
    console.log(test);
    this.setFavoriteHotels(test);
  }

  public removeFavoriteHotel(id: number) {
    let favoriteHotels = this.getFavoriteHotels();
    favoriteHotels = favoriteHotels.filter((hotel: Hotel) => hotel.id !== id);
    this.setFavoriteHotels(favoriteHotels);
  }

}
