import { Pipe, PipeTransform } from '@angular/core';
import { Hotel } from '../models/hotel';

@Pipe({
  name: 'hotelFilter'
})
export class HotelFilterPipe implements PipeTransform {

  public transform(hotels: Hotel[], value: string): any {
    if (value.length > 3) {
      return hotels.filter(el => el.title.toLowerCase().includes(value.toLocaleLowerCase())
       || el.description.toLowerCase().includes(value.toLocaleLowerCase()) );
    } else {
      return hotels;
    }
  }

}
