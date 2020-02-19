import { TestBed } from '@angular/core/testing';

import { ArmasService } from './armas.service';

describe('ArmasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ArmasService = TestBed.get(ArmasService);
    expect(service).toBeTruthy();
  });
});
