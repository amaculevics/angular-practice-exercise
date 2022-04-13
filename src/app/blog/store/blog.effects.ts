import { Injectable } from '@angular/core';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, combineLatestWith, forkJoin, map, mergeMap, of, switchMap, withLatestFrom } from 'rxjs';
import { Post } from '../models/post';
import { PostService } from '../services/post.service';
import { BlogActions, BlogSelectors } from './';

@Injectable({ providedIn: 'root' })
export class BlogEffects {
  constructor(private actions$: Actions, private postService: PostService, private store: Store) { }

  loadPosts$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(BlogActions.loadPosts),
      mergeMap(() => this.postService.getPosts().pipe(
        map(posts => BlogActions.loadPostsSuccess({ posts })),
        catchError(error => of(BlogActions.loadPostsFailure(error)))
      ))
    );
  });

  loadPost$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(BlogActions.loadPost),
      mergeMap((action) => forkJoin({
        posts: this.postService.getPosts(),
        comments: this.postService.getPostComments(),
        postId: of(action.id)
      }).pipe(
        map((resp) => {
          let post = resp.posts.find(post => post.id === resp.postId) || null;
          let postComments = resp.comments.filter(comment => comment.postId === resp.postId);

          if (post && postComments.length > 0) {
            post!.comments = postComments;
          }
          return BlogActions.loadPostSuccess({ currentPost: post })
        }),
        catchError(error => of(BlogActions.loadPostFailure(error)))
      ))
    );
  });

  search$ = createEffect(() => {
    return this.actions$.pipe(
    ofType(BlogActions.search),
    mergeMap((action) => this.postService.getPosts().pipe(
      map(posts => {
        const foundPosts = posts.filter((post: Post) => post.title.startsWith(action.searchTerm));
        return BlogActions.loadPostsSuccess({ posts: foundPosts })
      }),
      catchError(error => of(BlogActions.loadPostsFailure(error)))
    )))
  });

}
