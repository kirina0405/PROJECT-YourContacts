import { TestBed, inject } from '@angular/core/testing';

import { ContactSearchService } from './contact-search.service';

describe('ContactSearchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContactSearchService]
    });
  });

  it('should be created', inject([ContactSearchService], (service: ContactSearchService) => {
    expect(service).toBeTruthy();
  }));
});
