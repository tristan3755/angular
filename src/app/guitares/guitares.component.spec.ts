import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuitaresComponent } from './guitares.component';

describe('GuitaresComponent', () => {
  let component: GuitaresComponent;
  let fixture: ComponentFixture<GuitaresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuitaresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuitaresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
