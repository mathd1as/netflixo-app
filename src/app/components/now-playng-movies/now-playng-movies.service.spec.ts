import { TestBed } from '@angular/core/testing';

import { NowPlayngMoviesService } from './now-playng-movies.service';

describe('NowPlayngMoviesService', () => {
  let service: NowPlayngMoviesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NowPlayngMoviesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
