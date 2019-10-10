import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
import { Hotel } from '../../models/hotel';

@Injectable({
  providedIn: 'root'
})
export class SharedSelectedHotelService {
  private selectedHotelSource = new BehaviorSubject<Hotel>(null);
  // tslint:disable-next-line: member-ordering
  public selectedHotel$ = this.selectedHotelSource.asObservable();

  public setSelectedHotel(hotel: Hotel) {
    this.selectedHotelSource.next(hotel);
  }
}
