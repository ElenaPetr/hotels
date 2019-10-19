import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hotel-contacts',
  templateUrl: './hotel-contacts.component.html',
  styleUrls: ['./hotel-contacts.component.scss']
})
export class HotelContactsComponent implements OnInit {

  public isEditMode: boolean = false;
  constructor() { }

  public ngOnInit() {
  }

}
