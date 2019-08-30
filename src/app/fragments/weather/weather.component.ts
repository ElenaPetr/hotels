import { Component, OnInit, Input } from '@angular/core';
import { Weather } from 'src/app/models/weather';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  @Input() public weather: Weather;

  constructor() { }

 public ngOnInit() {
  }

}
