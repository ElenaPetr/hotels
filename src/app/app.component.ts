import { Component, OnInit } from '@angular/core';
import { Hotel } from './models/hotel';

import { HOTELS } from './mock-data/hotels';
import { FAVORITEHOTELS } from './mock-data/favorite-hotels';
import { MatSnackBar } from '@angular/material';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public hotels: Hotel[] = HOTELS;
  public favoriteHotels: Hotel[] = FAVORITEHOTELS;
  public selectedHotel: Hotel = HOTELS[0];

  public title = '';

  public constructor(private snackBar: MatSnackBar) { }

  public ngOnInit() {
    console.log(this.hotels);
  }

  public onSelectHotel(id: number) {
    this.selectedHotel = this.hotels.find(hotel => hotel.id === id);
  }

  public onAddFavorite(id: number) {
    const favorite = this.hotels.find(hotel => hotel.id === id);
    if (this.favoriteHotels.some(el => el.id === id)) {
      this.openSnackBar('Hotel is in favorite', 'close');
    } else {
      this.favoriteHotels.push(favorite);
    }
    console.log(this.favoriteHotels);
  }

  public openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

  public onDeletFavorite(event: number) {
    console.log('deleted', event);
    this.favoriteHotels = this.favoriteHotels.filter(el => el.id !== event);
    console.log('favoriteHotels', this.favoriteHotels);
  }

}
