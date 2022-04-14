import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { Post } from '../models/post';
import { BlogSelectors } from '../store';

import { PostListComponent } from './post-list.component';

describe('PostsComponent', () => {
  let component: PostListComponent;
  let store: MockStore;

  const posts: Post[] = [{
    id: 1,
    title: 'Test',
    body: '',
  }];

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideMockStore({
          selectors: [
            { selector: BlogSelectors.selectBlogPosts, value: posts },
          ]
        }),
      ]
    })

    store = TestBed.inject(MockStore);
    component = new PostListComponent(store);
  });

  it('init', () => {
    component.ngOnInit();
    component.posts$.subscribe(posts => {
      expect(posts).toEqual(posts);
    });
  });
});
