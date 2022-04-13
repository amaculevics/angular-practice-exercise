import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';

import { Post } from '../models/post';
import { BlogActions, BlogSelectors } from '../store';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  @Output()
  toggleSidenav = new EventEmitter();

  posts$: Observable<Post[]> = of([]);
  errorMessage$: Observable<string | null> = of(null);

  constructor(private store: Store) { };

  ngOnInit(): void {
    this.posts$ = this.store.select(BlogSelectors.selectBlogPosts);
    this.errorMessage$ = this.store.select(BlogSelectors.selectGetPostsError);
    this.store.dispatch(BlogActions.loadPosts());
  };

}
