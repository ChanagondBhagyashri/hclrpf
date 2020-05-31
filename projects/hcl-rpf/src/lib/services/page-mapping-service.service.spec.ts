import { TestBed } from '@angular/core/testing';

import { PageMappingServiceService } from './page-mapping-service.service';

describe('PageMappingServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PageMappingServiceService = TestBed.get(PageMappingServiceService);
    expect(service).toBeTruthy();
  });
});
