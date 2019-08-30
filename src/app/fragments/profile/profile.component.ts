import { Component, OnInit, Input } from '@angular/core';
import { Hotel } from 'src/app/models/hotel';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  @Input() public hotel: Hotel;

  constructor() { }

public ngOnInit() {
  }

}
