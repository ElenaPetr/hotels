import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { HotelComments } from 'src/app/models/hotel-comments';
import { SharedHotelsService } from 'src/app/shared/services/shared-hotels.service';
import { switchMap } from 'rxjs/operators';

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
    this.comments$ = this.route.queryParamMap.pipe(
      switchMap((params: ParamMap) => this.sharedHotelsService.getCommentsById(params.get('id'))
      )
    );
  }

}
