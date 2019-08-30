import { Component } from '@angular/core';
import { Hotel } from './models/hotel';

import { HOTELS } from './mock-data/hotels';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public hotels: Hotel[] = HOTELS;

}
