import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { SharedHotelsService } from 'src/app/shared/services/shared-hotels.service';
import { Observable } from 'rxjs';
import { Hotel } from 'src/app/models/hotel';

@Component({
  selector: 'app-hotel-detail',
  templateUrl: './hotel-detail.component.html',
  styleUrls: ['./hotel-detail.component.scss']
})
export class HotelDetailComponent implements OnInit {

 public hotel$: Observable<Hotel>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private sharedHotelsService: SharedHotelsService) { }

 public ngOnInit() {
  this.hotel$ = this.route.paramMap.pipe(
    switchMap((params: ParamMap) =>
      this.sharedHotelsService.getHotelById(params.get('id')))
  );
  }

}
