import { Component, OnInit, Input } from '@angular/core';
import { Profile } from 'src/app/models/profile';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  @Input() public profile: Profile;

  constructor() { }

public ngOnInit() {
  }

}
