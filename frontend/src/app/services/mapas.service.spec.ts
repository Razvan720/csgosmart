import { TestBed } from '@angular/core/testing';

import { MapasService } from './mapas.service';

describe('MapasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MapasService = TestBed.get(MapasService);
    expect(service).toBeTruthy();
  });
});
