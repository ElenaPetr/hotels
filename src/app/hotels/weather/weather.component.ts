import { Component, OnInit, Input } from '@angular/core';
import { Weather } from 'src/app/models/weather';
import { Subscription } from 'rxjs';
import { SharedSelectedHotelService } from 'src/app/shared/services/shared-selected-hotel.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})

export class WeatherComponent {

  public weather: Weather;
  public selectedHotelSubscription: Subscription;

  constructor(private sharedSelectedHotelService: SharedSelectedHotelService) {
    this.selectedHotelSubscription = this.sharedSelectedHotelService.selectedHotel$
      .subscribe(hotel => {
        this.weather = hotel.weather;
      });
  }

}
