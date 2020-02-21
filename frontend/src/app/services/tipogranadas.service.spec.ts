import { TestBed } from '@angular/core/testing';

import { TipogranadasService } from './tipogranadas.service';

describe('TipogranadasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TipogranadasService = TestBed.get(TipogranadasService);
    expect(service).toBeTruthy();
  });
});
