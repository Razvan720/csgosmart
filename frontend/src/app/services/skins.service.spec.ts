import { TestBed } from '@angular/core/testing';

import { SkinsService } from './skins.service';

describe('SkinsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SkinsService = TestBed.get(SkinsService);
    expect(service).toBeTruthy();
  });
});
