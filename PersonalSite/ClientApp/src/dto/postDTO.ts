export class PostDTO {
  BlogId: string;
  AuthorId: string;
  postId: string;
  title: string = '';
  content: string = '';
  createdon: Date;
}
