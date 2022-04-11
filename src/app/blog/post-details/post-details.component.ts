import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { Post } from '../post';
import { BlogActions, BlogReducers } from '../store';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {
  currentPost$: Observable<Post | null> = of(null);
  errorMessage$: Observable<string | null> = of(null);

  constructor(private store: Store, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const postId = +params['id'];
      if (postId) {
        this.store.dispatch(BlogActions.loadPost({ id: postId }));
        this.currentPost$ = this.store.select(BlogReducers.selectBlogPost)
        this.errorMessage$ = this.store.select(BlogReducers.selectGetPostsError);
      }
    })
  }
}
