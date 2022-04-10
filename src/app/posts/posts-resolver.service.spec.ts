import { TestBed } from '@angular/core/testing';

import { PostsResolverService } from './posts-resolver.service';

describe('PostsResolverService', () => {
  let service: PostsResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostsResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
