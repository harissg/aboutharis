import { Post } from './post';

export class Blog {
  id: number;
  name: string;
  //maybe author time
  // date time it was created on
  posts: Array<Post>;
}
