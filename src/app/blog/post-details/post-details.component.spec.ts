import { TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { of } from 'rxjs';
import { Post } from '../models/post';
import { BlogSelectors } from '../store';

import { PostDetailsComponent } from './post-details.component';

describe('PostDetailsComponent', () => {
  let component: PostDetailsComponent;
  let store: MockStore;
  let route: ActivatedRoute;

  const post: Post = {
    id: 1,
    title: 'Test',
    body: '',
  };


  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideMockStore({
          selectors: [
            { selector: BlogSelectors.selectBlogPost, value: post },
            { selector: BlogSelectors.selectGetPostsError, value: 'error' }
          ]
        }),
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({id: 1})
          }
        }
      ]
    })

    store = TestBed.inject(MockStore);
    route = TestBed.inject(ActivatedRoute);
    component = new PostDetailsComponent(store, route);
  });

  it('init', () => {
    component.ngOnInit();
    component.currentPost$.subscribe(currentPost => {
      expect(currentPost).toEqual(post);
    });
    component.errorMessage$.subscribe(error => {
      expect(error).toBe('error');
    });
  });

});
