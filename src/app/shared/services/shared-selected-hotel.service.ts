import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Hotel } from '../../models/hotel';

@Injectable({
  providedIn: 'root'
})
export class SharedSelectedHotelService {
  private selectedHotelSource = new Subject<Hotel>();
  // tslint:disable-next-line: member-ordering
  public selectedHotel$ = this.selectedHotelSource.asObservable();

  public setSelectedHotel(hotel: Hotel) {
    this.selectedHotelSource.next(hotel);
  }
}
