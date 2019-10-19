import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Hotel } from 'src/app/models/hotel';

@Component({
  selector: 'app-favorite-hotels-info',
  templateUrl: './favorite-hotels-info.component.html',
  styleUrls: ['./favorite-hotels-info.component.scss']
})
export class FavoriteHotelsInfoComponent {

  @Input() public hotel: Hotel;
  @Output() public delete: EventEmitter<number> = new EventEmitter();

  public deleteFavorite(id: number) {
    this.delete.emit(id);
  }

}
