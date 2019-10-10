import { Component, OnDestroy } from '@angular/core';
import { Profile } from 'src/app/models/profile';
import { SharedSelectedHotelService } from 'src/app/shared/services/shared-selected-hotel.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnDestroy {
  public profile: Profile;
  public selectedHotelSubscription: Subscription;

  constructor(private sharedSelectedHotelService: SharedSelectedHotelService) {
    this.selectedHotelSubscription = this.sharedSelectedHotelService.selectedHotel$
      .subscribe(hotel => {
        if (hotel) {
          this.profile = hotel.profile;
        }
      });
  }

  public ngOnDestroy() {
    this.selectedHotelSubscription.unsubscribe();
  }

}
