import { createFeatureSelector, createSelector } from '@ngrx/store';
import { BlogState, FEATURE_KEY } from './blog-state';

const selectBlogFeatureState = createFeatureSelector<BlogState>(FEATURE_KEY);

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
