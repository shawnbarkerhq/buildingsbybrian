import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CitiesDetailComponent } from './cities-detail.component';

describe('CitiesDetailComponent', () => {
  let component: CitiesDetailComponent;
  let fixture: ComponentFixture<CitiesDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CitiesDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CitiesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
