import { TestBed } from '@angular/core/testing';

import { STDataService } from './st-data.service';

describe('STDataService', () => {
  let service: STDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(STDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
