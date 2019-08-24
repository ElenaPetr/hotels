import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-button',
  templateUrl: './modal-button.component.html',
  styleUrls: ['./modal-button.component.scss']
})
export class ModalButtonComponent implements OnInit {

  public btnTitle = 'Click me!';

  constructor() { }

  public ngOnInit() {
  }

}
