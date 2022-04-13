import { Post } from '../models/post';

export const FEATURE_KEY = 'blog';

export interface BlogState {
  posts: Post[],
  currentPost: Post | null,
  errorMessage: string | null
};
