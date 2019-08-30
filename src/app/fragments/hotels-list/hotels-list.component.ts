import { Component, OnInit, Input } from '@angular/core';
import { Hotel } from 'src/app/models/hotel';

@Component({
  selector: 'app-hotels-list',
  templateUrl: './hotels-list.component.html',
  styleUrls: ['./hotels-list.component.scss']
})
export class HotelsListComponent implements OnInit {

  @Input() public hotels: Hotel[];

  constructor() { }

 public ngOnInit() {
  }

}
