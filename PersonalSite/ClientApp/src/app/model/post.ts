import { PostComment } from './postComment';

export class Post {
  id: number;
  title: string = '';
  content: string = '';
  comments: Array<PostComment>;
}
