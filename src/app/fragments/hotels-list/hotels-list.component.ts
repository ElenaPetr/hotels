import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Hotel } from 'src/app/models/hotel';

@Component({
  selector: 'app-hotels-list',
  templateUrl: './hotels-list.component.html',
  styleUrls: ['./hotels-list.component.scss']
})
export class HotelsListComponent implements OnInit {

  @Input() public hotels: Hotel[];
  @Output() public getHotel: EventEmitter<number> = new EventEmitter();

  constructor() { }

 public ngOnInit() {
  }

  public selectHotel(id: number) {
    console.log(id);
    this.getHotel.emit(id);
  }

}
