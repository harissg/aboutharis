import { Post } from '../app/model/post';

export class BlogDTO {
  BlogId: string;
  AuthorId: string;
  Posts: Array<Post>;
  Name: string;
  CreatedOn: Date;
  Foo?: string;
}
