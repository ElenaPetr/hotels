import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteHotelModalComponent } from './delete-hotel-modal.component';

describe('DeleteHotelModalComponent', () => {
  let component: DeleteHotelModalComponent;
  let fixture: ComponentFixture<DeleteHotelModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteHotelModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteHotelModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
