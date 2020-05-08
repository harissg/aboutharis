import { Component, OnInit } from '@angular/core';
import { BlogPost } from 'src/dto/blogPost';
import { BlogService } from 'src/services/blog.service';
import { FormsModule } from '@angular/forms';
import { AuthGuard } from 'src/app/auth/authGuard';

@Component({
  selector: 'app-blog-post-add',
  templateUrl: './blog.post.add.component.html',
  providers: [BlogService, AuthGuard]
})
export class BlogPostAddComponent implements OnInit {
  title: string;
  content: string;
  constructor(private blogService: BlogService, private authGuard: AuthGuard) {
    this.title = '';
    this.content = '';
  }

  ngOnInit() {
    if (this.authGuard.canActivate(null, null)) {
      console.log("auth passed");
    }
  }
  add(): void {
    const newBlogPost: BlogPost = new BlogPost();
    newBlogPost.AuthorId = 1;
    newBlogPost.Post.title = this.title;
    newBlogPost.Post.content = this.content;
    this.blogService.addBlogPost(newBlogPost);
  }

  cancel(): void {
    this.title = '';
    this.content = '';
    // use form group to reset form
  }
}
