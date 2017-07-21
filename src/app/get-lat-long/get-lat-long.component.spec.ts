import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetLatLongComponent } from './get-lat-long.component';

describe('GetLatLongComponent', () => {
  let component: GetLatLongComponent;
  let fixture: ComponentFixture<GetLatLongComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetLatLongComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetLatLongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
