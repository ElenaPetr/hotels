import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalButtonComponent } from './modal-button/modal-button.component';
import { MaterialModule } from '../shared-modules/material.module';

@NgModule({
  declarations: [ModalButtonComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    ModalButtonComponent
  ]
})

export class SharedComponentsModule { }
