import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthGuard } from 'src/app/auth/authGuard';
import { Post } from 'src/app/model/post';
import { PostDTO } from 'src/dto/postDTO';
import { PostService } from 'src/services/post.service';

@Component({
  selector: 'app-blog-post-add',
  templateUrl: './blog.post.add.component.html',
  providers: [PostService, AuthGuard]
})
export class BlogPostAddComponent implements OnInit {
  title: string;
  content: string;
  constructor(private postService: PostService, private authGuard: AuthGuard) {
    this.title = '';
    this.content = '';
  }

  ngOnInit() {
    if (this.authGuard.canActivate(null, null)) {
      console.log("auth passed");
    }
  }
  add(): void {
    const dto: PostDTO = new PostDTO();
    dto.AuthorId = "1"; // get from local storage
    dto.BlogId = "1"; // get from local storage
    const post = new Post();
    post.title = this.title;
    post.content = this.content;
    this.postService.add(dto);
  }

  cancel(): void {
    this.title = '';
    this.content = '';
    // use form group to reset form
  }
}
