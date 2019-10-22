import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatesListItemComponent } from './states-list-item.component';

describe('StatesListItemComponent', () => {
  let component: StatesListItemComponent;
  let fixture: ComponentFixture<StatesListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatesListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatesListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
