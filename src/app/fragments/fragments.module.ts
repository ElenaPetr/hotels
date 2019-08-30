import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SharedModule } from '../shared/shared.module';
import { WeatherComponent } from './weather/weather.component';
import { ProfileComponent } from './profile/profile.component';
import { HotelsListComponent } from './hotels-list/hotels-list.component';
import { HotelInfoComponent } from './hotel-info/hotel-info.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, WeatherComponent,
    ProfileComponent,
    HotelsListComponent,
    HotelInfoComponent],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    WeatherComponent,
    ProfileComponent,
    HotelsListComponent,
    HotelInfoComponent
  ]
})
export class FragmentsModule { }
