import { TestBed } from '@angular/core/testing';

import { GetProdCategoriasService } from './get-prod-categorias.service';

describe('GetProdCategoriasService', () => {
  let service: GetProdCategoriasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetProdCategoriasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
