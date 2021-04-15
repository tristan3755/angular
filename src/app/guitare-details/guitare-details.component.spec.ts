import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuitareDetailsComponent } from './guitare-details.component';

describe('GuitareDetailsComponent', () => {
  let component: GuitareDetailsComponent;
  let fixture: ComponentFixture<GuitareDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuitareDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuitareDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
