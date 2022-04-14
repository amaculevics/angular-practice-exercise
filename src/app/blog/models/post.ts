export interface Post {
  userId?: number;
  id: number;
  title: string;
  body: string;
  comments?: PostComment[]
}

export interface PostComment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}
