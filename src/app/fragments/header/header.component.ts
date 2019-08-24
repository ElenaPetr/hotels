import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  private title = 'HOTELS';

  constructor() { }

  public ngOnInit() {
  }

  public getTitle(): string {
     return this.title;
  }

}
