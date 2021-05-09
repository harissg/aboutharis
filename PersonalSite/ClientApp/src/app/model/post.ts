import { PostComment } from './post.comment';

export class Post {
  postId: string;
  title: string = '';
  content: string = '';
  comments: Array<PostComment>;
  createdon: Date;
}
