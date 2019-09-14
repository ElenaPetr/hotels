import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public filterString = '';

  public constructor() { }

  public ngOnInit() {
  }

  public setFilterValue(value: string): void {
    this.filterString = value;
  }

}
