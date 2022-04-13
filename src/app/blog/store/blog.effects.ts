import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, forkJoin, map, mergeMap, of } from 'rxjs';
import { PostService } from '../services/post.service';
import { BlogActions } from './';

@Injectable({ providedIn: 'root' })
export class BlogEffects {
  constructor(private actions$: Actions, private postService: PostService) { }

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

}
