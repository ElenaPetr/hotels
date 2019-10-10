import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WeatherComponent } from './weather/weather.component';
import { ProfileComponent } from './profile/profile.component';
import { HotelsListComponent } from './hotels-list/hotels-list.component';
import { HotelInfoComponent } from './hotel-info/hotel-info.component';
import { SharedModule } from '../shared/shared.module';
import { FavoriteHotelsComponent } from './favorite-hotels/favorite-hotels.component';
import { FavoriteHotelsInfoComponent } from './favorite-hotels/favorite-hotels-info/favorite-hotels-info.component';
import { HotelsRoutingModule } from './hotels-routing.module';
import { HotelsComponent } from './hotels/hotels.component';
import { HotelDetailComponent } from './hotel-detail/hotel-detail.component';
import { CommentsComponent } from './comments/comments.component';
import { ContactsComponent } from './contacts/contacts.component';


@NgModule({
  declarations: [
    WeatherComponent,
    ProfileComponent,
    HotelsListComponent,
    HotelInfoComponent,
    FavoriteHotelsComponent,
    FavoriteHotelsInfoComponent,
    HotelsComponent,
    HotelDetailComponent,
    CommentsComponent,
    ContactsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    HotelsRoutingModule
  ],
  exports: [
    WeatherComponent,
    ProfileComponent,
    HotelsListComponent,
    HotelInfoComponent,
    FavoriteHotelsComponent,
    FavoriteHotelsInfoComponent,
    HotelsComponent,
    HotelDetailComponent
  ]
})
export class HotelsModule { }