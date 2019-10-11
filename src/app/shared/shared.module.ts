import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatTooltipModule,
  MatSnackBarModule,
  MatAutocompleteModule,
  MatFormFieldModule,
  MatInputModule,
  MatPaginatorModule,
  MatDialogModule,
  MatCheckboxModule,
  MatListModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HotelFilterPipe } from '../pipes/hotel-filter.pipe';
import { StarsFilterPipe } from '../pipes/stars-filter.pipe';
import { FormsModule } from '@angular/forms';
import { AccessDirective } from './directives/access.directive';
@NgModule({
  declarations: [
    HotelFilterPipe,
    StarsFilterPipe,
    AccessDirective],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatTooltipModule,
    FlexLayoutModule,
    MatSnackBarModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatDialogModule,
    MatCheckboxModule,
    MatListModule,
    FormsModule
  ],
  exports: [
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatTooltipModule,
    FlexLayoutModule,
    MatSnackBarModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    HotelFilterPipe,
    StarsFilterPipe,
    MatPaginatorModule,
    MatDialogModule,
    MatCheckboxModule,
    MatListModule,
    FormsModule,
    AccessDirective
  ]
})
export class SharedModule { }
