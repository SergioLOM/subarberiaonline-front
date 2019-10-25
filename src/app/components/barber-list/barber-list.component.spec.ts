import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarberListComponent } from './barber-list.component';

describe('BarberListComponent', () => {
  let component: BarberListComponent;
  let fixture: ComponentFixture<BarberListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarberListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarberListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
