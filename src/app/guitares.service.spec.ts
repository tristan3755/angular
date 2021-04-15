import { TestBed } from '@angular/core/testing';

import { GuitaresService } from './guitares.service';

describe('GuitaresService', () => {
  let service: GuitaresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GuitaresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
