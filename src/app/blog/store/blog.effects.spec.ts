import { TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, of } from 'rxjs';
import { BlogActions, BlogEffects } from '.';
import { PostService } from '../services/post.service';
import { BlogState } from './blog-state';
import { Post } from '../models/post';

describe('Blog effects', function () {
  let store: MockStore;
  let actions$: Observable<any>;
  let effects: BlogEffects.BlogEffects;
  let postService: jasmine.SpyObj<PostService>;

  const initialState: BlogState = {
    posts: [],
    currentPost: null,
    errorMessage: null
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideMockActions(() => actions$),
        provideMockStore({ initialState }),
        {
          provide: PostService,
          useValue: jasmine.createSpyObj('postService', ['getPosts'])
        }
      ]
    });

    store = TestBed.inject(MockStore);
    effects = TestBed.inject(BlogEffects.BlogEffects);
    postService = TestBed.inject(PostService) as jasmine.SpyObj<PostService>;
  });

  it('should call loadPostsSuccess action', function () {
    const posts: Post[] = [{
      userId: 1,
      id: 1,
      title: 'aaa',
      body: 'aaa'
    }];

    postService.getPosts.and.returnValue(of(posts));
    actions$ = of(BlogActions.loadPosts());

    effects.loadPosts$.subscribe(action => {
      expect(action).toEqual(BlogActions.loadPostsSuccess({ posts }));
    });
  })

  // it('should call loadPostsFailure action', function () {
  //   const errorMessage = 'error';

  //   postService.getPosts.and.returnValue(throwError(() => new Error(errorMessage)))
  //   actions$ = of(BlogActions.loadPosts());

  //   effects.loadPosts$.subscribe(action => {
  //     expect(action).toEqual(BlogActions.loadPostsFailure({ error: errorMessage }));
  //   });
  // })

});
