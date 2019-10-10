import {Component, Inject} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {
  title: string;
  id: number;
}

@Component({
  selector: 'app-delete-hotel-modal',
  templateUrl: './delete-hotel-modal.component.html',
  styleUrls: ['./delete-hotel-modal.component.scss']
})
export class DeleteHotelModalComponent {

  constructor(
    public dialogRef: MatDialogRef<DeleteHotelModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  public onNoClick(): void {
    this.dialogRef.close();
  }

}
