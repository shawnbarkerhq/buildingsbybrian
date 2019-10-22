import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CitiesListItemComponent } from './cities-list-item.component';

describe('CitiesListItemComponent', () => {
  let component: CitiesListItemComponent;
  let fixture: ComponentFixture<CitiesListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CitiesListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CitiesListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
