import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Hotel } from 'src/app/models/hotel';

@Component({
  selector: 'app-hotel-info',
  templateUrl: './hotel-info.component.html',
  styleUrls: ['./hotel-info.component.scss']
})
export class HotelInfoComponent implements OnInit {

  @Input() public hotel: Hotel;

  constructor() { }

  public ngOnInit() {
  }

}
