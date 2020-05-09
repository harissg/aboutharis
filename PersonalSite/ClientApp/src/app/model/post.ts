import { PostComment } from './postComment';

export class Post {
  postId: number;
  title: string = '';
  content: string = '';
  comments: Array<PostComment>;
  createdon: Date;
}
