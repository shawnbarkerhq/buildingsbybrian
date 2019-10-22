import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContinentsDashboardComponent } from './continents-dashboard.component';

describe('ContinentsDashboardComponent', () => {
  let component: ContinentsDashboardComponent;
  let fixture: ComponentFixture<ContinentsDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContinentsDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContinentsDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
