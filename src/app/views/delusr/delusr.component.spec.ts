import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelusrComponent } from './delusr.component';

describe('DelusrComponent', () => {
  let component: DelusrComponent;
  let fixture: ComponentFixture<DelusrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DelusrComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DelusrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
