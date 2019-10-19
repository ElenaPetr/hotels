import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelContactsComponent } from './hotel-contacts.component';

describe('ContactsComponent', () => {
  let component: HotelContactsComponent;
  let fixture: ComponentFixture<HotelContactsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotelContactsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
