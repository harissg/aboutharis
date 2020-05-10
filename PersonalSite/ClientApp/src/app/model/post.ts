import { PostComment } from './post.comment';

export class Post {
  postId: number;
  title: string = '';
  content: string = '';
  comments: Array<PostComment>;
  createdon: Date;
}
