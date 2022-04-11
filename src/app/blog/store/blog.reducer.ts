import { createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';
import { Post } from '../post';
import * as BlogActions from './blog.actions';

export interface BlogState {
  posts: Post[],
  currentPost: Post | null,
  errorMessage: string | null
};

const initialState: BlogState = {
  posts: [],
  currentPost: null,
  errorMessage: null
};

const selectBlogFeatureState = createFeatureSelector<BlogState>('blog');

export const selectBlogPosts = createSelector(
  selectBlogFeatureState,
  state => state.posts
);

export const selectBlogPost = createSelector(
  selectBlogFeatureState,
  state => state.currentPost
);

export const selectGetPostsError = createSelector(
  selectBlogFeatureState,
  state => state.errorMessage
);

export const blogReducer = createReducer<BlogState>(
  initialState,
  on(BlogActions.loadPostsSuccess, (state, action): BlogState => {
    return {
      ...state,
      posts: action.posts,
      currentPost: null,
      errorMessage: null
    }
  }),
  on(BlogActions.loadPostsFailure, (state, action): BlogState => {
    return {
      ...state,
      posts: [],
      currentPost: null,
      errorMessage: action.error
    }
  }),
  on(BlogActions.loadPostSuccess, (state, action): BlogState => {
    return {
      ...state,
      currentPost: action.currentPost
    }
  }),
  on(BlogActions.loadPostFailure, (state, action): BlogState => {
    return {
      ...state,
      currentPost: null,
      errorMessage: action.error
    }
  }),
  );
