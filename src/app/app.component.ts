import { Component, OnInit, OnDestroy } from '@angular/core';
import { tap, first } from 'rxjs/operators';
import { SharedHotelsService } from './shared/services/shared-hotels.service';
import { Observable, Subscription } from 'rxjs';
import { Hotel } from './models/hotel';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public isLoading = true;
  public filterString = '';
  public subscription: Subscription;

  constructor() {}

  public setFilterValue(value: string): void {
    this.filterString = value;
  }

}
