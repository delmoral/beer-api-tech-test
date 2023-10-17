import { TestBed } from '@angular/core/testing';

import { BeerResourceService } from './beer-resource.service';

describe('BeerResourceService', () => {
  let service: BeerResourceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BeerResourceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
