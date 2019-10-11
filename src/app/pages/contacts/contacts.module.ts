import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactsRoutingModule } from './contacts-routing.module';
import { ContactsComponent } from './contacts.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ContactsComponent],
  imports: [
    CommonModule,
    RouterModule,
    ContactsRoutingModule
  ]
})
export class ContactsModule { }
