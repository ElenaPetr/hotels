import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Hotel } from 'src/app/models/hotel';
import { Star } from 'src/app/models/stars';

@Component({
  selector: 'app-hotels-list',
  templateUrl: './hotels-list.component.html',
  styleUrls: ['./hotels-list.component.scss']
})
export class HotelsListComponent implements OnInit {

  @Input() public hotels: Hotel[];
  @Input() public filterString: string;
  @Input() public picture: string;
  @Output() public getHotel: EventEmitter<number> = new EventEmitter();
  @Input() public stars: Star[];
  @Output() public favorite: EventEmitter<number> = new EventEmitter();

  public starValue = '';

  constructor() { }

  public ngOnInit() {
  }

  public selectHotel(id: number) {
    this.getHotel.emit(id);
  }

  public addFavorite(id: number) {
    this.favorite.emit(id);
  }

  public selectStarValue(starValue: string) {
    this.starValue = starValue;
  }

}
