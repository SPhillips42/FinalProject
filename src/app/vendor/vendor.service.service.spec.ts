import { TestBed } from '@angular/core/testing';

import { Vendor1 } from './vendor.service.service';

describe('Vendor.ServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Vendor1 = TestBed.get(Vendor1);
    expect(service).toBeTruthy();
  });
});
