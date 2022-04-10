import { PostComment } from './post-comment';

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
  comments?: PostComment[]
}
