import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteHotelsInfoComponent } from './favorite-hotels-info.component';

describe('FavoriteHotelsInfoComponent', () => {
  let component: FavoriteHotelsInfoComponent;
  let fixture: ComponentFixture<FavoriteHotelsInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavoriteHotelsInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoriteHotelsInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
