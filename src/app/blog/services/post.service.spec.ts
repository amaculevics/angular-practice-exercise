import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { Post, PostComment } from '../models/post';

import { PostService } from './post.service';

describe('PostService', () => {
  let service: PostService;
  let httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: HttpClient,
          useValue: httpClientSpy
        }
      ]
    });

    service = TestBed.inject(PostService);
    httpClientSpy = TestBed.inject(HttpClient) as jasmine.SpyObj<HttpClient>;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get posts', async () => {
    const posts: Post[] = [{
      userId: 1,
      id: 1,
      title: 'aaa',
      body: 'aaa'
    }];

    httpClientSpy.get.and.returnValue(of(posts));

    service.getPosts().subscribe(posts => {
      expect(posts).toEqual(posts);
    });
  });

  it('should get post comments', () => {
    const comments: PostComment[] = [
      {
        postId: 1,
        id: 1,
        name: 'My Comment',
        email: 'john@mail.com',
        body: 'Test'
      }
    ];

    httpClientSpy.get.and.returnValue(of(comments));

    service.getPostComments().subscribe(comments => {
      expect(comments).toEqual(comments);
    });
  });
});
