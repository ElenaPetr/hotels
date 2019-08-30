import { Component, OnInit } from '@angular/core';
import { Hotel } from './models/hotel';

import { HOTELS } from './mock-data/hotels';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public hotels: Hotel[] = HOTELS;
  public selectedHotel: Hotel = HOTELS[0];

  public ngOnInit() {
    console.log(this.selectedHotel);
  }

  public onSelectHotel(id: number) {
    this.selectedHotel = this.hotels.find(hotel => hotel.id === id);
  }

}
