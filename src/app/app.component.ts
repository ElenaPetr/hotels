import { Component } from '@angular/core';
import { SharedHotelsService } from './shared/services/shared-hotels.service';
import { Observable, Subscription } from 'rxjs';
import { Hotel } from './models/hotel';
import { MatCheckboxChange } from '@angular/material';
import { AuthorizationLocalStorageService } from './shared/services/authorization-local-storage.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public checked: boolean = false;
  public isLoading = true;
  public filterString = '';
  public subscription: Subscription;
  public test$: Observable<Hotel[]>;

  constructor(
    private sharedHotelsService: SharedHotelsService,
    private authorizationLocalStorageService: AuthorizationLocalStorageService) { }

  public setFilterValue(value: string): void {
    this.filterString = value;
  }

  public checkBox(event: MatCheckboxChange) {
    if (event.checked) {
      this.authorizationLocalStorageService.setAuthorizationToken();
    } else {
      this.authorizationLocalStorageService.removeAuthorizationToken();
    }
  }

  public isAdmin() {
    return this.authorizationLocalStorageService.getAuthorizationToken('token');
  }

}
