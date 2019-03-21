import { TestBed } from '@angular/core/testing';

import { RequestLineService } from './requestLine-service.service';

describe('RequestLineServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RequestLineService = TestBed.get(RequestLineService);
    expect(service).toBeTruthy();
  });
});
