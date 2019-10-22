import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatesDetailComponent } from './states-detail.component';

describe('StatesDetailComponent', () => {
  let component: StatesDetailComponent;
  let fixture: ComponentFixture<StatesDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatesDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
