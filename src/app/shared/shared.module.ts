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
  MatCheckboxModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HotelFilterPipe } from '../pipes/hotel-filter.pipe';
import { StarsFilterPipe } from '../pipes/stars-filter.pipe';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    HotelFilterPipe,
    StarsFilterPipe],
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
    FormsModule
  ]
})
export class SharedModule { }
