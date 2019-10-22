import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildingsListItemComponent } from './buildings-list-item.component';

describe('BuildingsListItemComponent', () => {
  let component: BuildingsListItemComponent;
  let fixture: ComponentFixture<BuildingsListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuildingsListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildingsListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
