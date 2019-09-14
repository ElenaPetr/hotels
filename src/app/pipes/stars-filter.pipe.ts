import { Pipe, PipeTransform } from '@angular/core';
import { Hotel } from '../models/hotel';

@Pipe({
  name: 'starsFilter'
})
export class StarsFilterPipe implements PipeTransform {

  public transform(hotels: Hotel[], value: number | string): any {
    return typeof value === 'number' ? hotels.filter((hotel: Hotel) => hotel.stars === value) : hotels;
  }
}
