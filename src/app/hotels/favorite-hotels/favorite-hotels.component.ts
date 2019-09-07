import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Hotel } from 'src/app/models/hotel';

@Component({
  selector: 'app-favorite-hotels',
  templateUrl: './favorite-hotels.component.html',
  styleUrls: ['./favorite-hotels.component.scss', '../hotel-info/hotel-info.component.scss']
})
export class FavoriteHotelsComponent implements OnInit {

  @Input() public favoriteHotels: Hotel[];
  @Output() public delete: EventEmitter<number> = new EventEmitter();

  public constructor() { }

  public ngOnInit() {
  }

  public deleteFavorite(event: number) {
    this.delete.emit(event);
  }
}
