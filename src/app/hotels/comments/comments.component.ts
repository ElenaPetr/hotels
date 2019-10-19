import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { HotelComments } from 'src/app/models/hotel-comments';
import { SharedHotelsService } from 'src/app/shared/services/shared-hotels.service';
import { switchMap, tap } from 'rxjs/operators';
import { HotelsComponent } from '../hotels/hotels.component';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {
  public comments$: Observable<HotelComments>;

  constructor(
    private route: ActivatedRoute,
    private sharedHotelsService: SharedHotelsService
  ) { }

  public ngOnInit() {
    console.log('comments init');
    this.comments$ = this.route.parent.paramMap.pipe(
      tap((params: ParamMap) => console.log(params.get('id'))),
      switchMap((params: ParamMap) => this.sharedHotelsService.getCommentsById(+params.get('id'))
      )
    );
  }

}
