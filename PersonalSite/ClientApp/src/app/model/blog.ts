import { Post } from './post';

export class Blog {
  blogId: string;
  authorId: string;
  posts: Array<Post>;
  name: string;
  createdOn: Date;
}
