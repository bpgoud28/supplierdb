import { TestBed, inject } from '@angular/core/testing';
import { SortPipe } from './sort.pipe.service';

describe('FilterPipeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SortPipe]
    });
  });

  it('should be created', inject([SortPipe], (service: SortPipe) => {
    expect(service).toBeTruthy();
  }));
});
