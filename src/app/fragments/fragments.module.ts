import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MaterialModule } from '../shared/shared-modules/material.module';
import { SharedComponentsModule } from '../shared/shared-components/shared-components.module';
import { WeatherComponent } from './weather/weather.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, WeatherComponent,
    ProfileComponent],
  imports: [
    CommonModule,
    MaterialModule,
    SharedComponentsModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    WeatherComponent,
    ProfileComponent
  ]
})
export class FragmentsModule { }
