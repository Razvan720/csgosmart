import { TestBed } from '@angular/core/testing';

import { UpdatesModificacionesService } from './updates-modificaciones.service';

describe('UpdatesModificacionesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UpdatesModificacionesService = TestBed.get(UpdatesModificacionesService);
    expect(service).toBeTruthy();
  });
});
