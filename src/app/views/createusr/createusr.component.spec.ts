import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateusrComponent } from './createusr.component';

describe('CreateusrComponent', () => {
  let component: CreateusrComponent;
  let fixture: ComponentFixture<CreateusrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateusrComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateusrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
