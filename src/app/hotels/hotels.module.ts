import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WeatherComponent } from './weather/weather.component';
import { ProfileComponent } from './profile/profile.component';
import { HotelsListComponent } from './hotels-list/hotels-list.component';
import { HotelInfoComponent } from './hotel-info/hotel-info.component';
import { SharedModule } from '../shared/shared.module';
import { FavoriteHotelsComponent } from './favorite-hotels/favorite-hotels.component';
import { FavoriteHotelsInfoComponent } from './favorite-hotels/favorite-hotels-info/favorite-hotels-info.component';


@NgModule({
  declarations: [
    WeatherComponent,
    ProfileComponent,
    HotelsListComponent,
    HotelInfoComponent,
    FavoriteHotelsComponent,
    FavoriteHotelsInfoComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    WeatherComponent,
    ProfileComponent,
    HotelsListComponent,
    HotelInfoComponent,
    FavoriteHotelsComponent,
    FavoriteHotelsInfoComponent
  ]
})
export class HotelsModule { }
