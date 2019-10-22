import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContinentsDetailComponent } from './continents-detail.component';

describe('ContinentsDetailComponent', () => {
  let component: ContinentsDetailComponent;
  let fixture: ComponentFixture<ContinentsDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContinentsDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContinentsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
