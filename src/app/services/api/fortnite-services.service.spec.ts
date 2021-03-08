import { TestBed } from '@angular/core/testing';

import { FortniteServicesService } from './fortnite-services.service';

describe('FortniteServicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FortniteServicesService = TestBed.get(FortniteServicesService);
    expect(service).toBeTruthy();
  });
});
