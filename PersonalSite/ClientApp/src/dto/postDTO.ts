export class PostDTO{
  BlogId: string;
  AuthorId: string;
  postId: number;
  title: string = '';
  content: string = '';
  createdon: Date;
}
