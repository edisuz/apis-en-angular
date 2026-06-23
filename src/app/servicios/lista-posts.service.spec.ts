import { TestBed } from '@angular/core/testing';

import { ListaPostsService } from './lista-posts.service';

describe('ListaPostsService', () => {
  let service: ListaPostsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListaPostsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
