import { createReducer, on } from '@ngrx/store';
import * as BlogActions from './blog.actions'
import { BlogState } from './blog-state';

const initialState: BlogState = {
  posts: [],
  currentPost: null,
  errorMessage: null
};

export const blogReducer = createReducer<BlogState>(
  initialState,
  on(BlogActions.loadPosts, (state): BlogState => {
    return {
      ...state,
      posts: [],
      currentPost: null,
      errorMessage: null
    }
  }),
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
  }));
