import { createAction, props } from '@ngrx/store';
import { Post } from '../models/post';

export const loadPosts = createAction('[Blog] Load Posts');

export const loadPostsSuccess = createAction(
  '[Blog] Load Posts Success',
  props<{ posts: Post[] }>()
);

export const loadPostsFailure = createAction(
  '[Blog] Load Posts Failure',
  props<{ error: string }>()
);

export const loadPost = createAction(
  '[Blog] Load Post',
  props<{ id: number }>()
);

export const loadPostSuccess = createAction(
  '[Blog] Load Post Success',
  props<{ currentPost: Post | null }>()
);

export const loadPostFailure = createAction(
  '[Blog] Load Post Failure',
  props<{ error: string }>()
);

export const search = createAction(
  '[Blog] Search',
  props<{ searchTerm: string }>()
);

export const searchSuccess = createAction(
  '[Blog] Search Success',
  props<{ posts: Post[] }>()
);
