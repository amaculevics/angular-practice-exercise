import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Post } from '../post';
import { BlogActions, BlogReducers } from '../store';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  posts$: Observable<Post[]> = of([]);
  errorMessage$: Observable<string | null> = of(null);

  constructor(private store: Store) { };

  ngOnInit(): void {
    this.posts$ = this.store.select(BlogReducers.selectBlogPosts);
    this.errorMessage$ = this.store.select(BlogReducers.selectGetPostsError);
    this.store.dispatch(BlogActions.loadPosts());
  };

}
