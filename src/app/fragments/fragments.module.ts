import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SharedModule } from '../shared/shared.module';
import { DeleteHotelModalComponent } from './modals/delete-hotel-modal/delete-hotel-modal.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    DeleteHotelModalComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    DeleteHotelModalComponent
  ],
  entryComponents: [DeleteHotelModalComponent]
})
export class FragmentsModule { }
