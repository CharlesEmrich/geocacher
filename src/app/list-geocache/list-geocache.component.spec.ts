import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListGeocacheComponent } from './list-geocache.component';

describe('ListGeocacheComponent', () => {
  let component: ListGeocacheComponent;
  let fixture: ComponentFixture<ListGeocacheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListGeocacheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListGeocacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
