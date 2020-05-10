import { Component, OnInit } from '@angular/core';
import { AuthGuard } from 'src/app/auth/authGuard';
import { Post } from 'src/app/model/post';
import { PostDTO } from 'src/dto/postDTO';
import { PostService } from 'src/services/post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog-post-add',
  templateUrl: './blog.post.add.component.html',
  providers: [PostService, AuthGuard]
})
export class BlogPostAddComponent implements OnInit {
  title: string;
  content: string;
  constructor(private postService: PostService, private authGuard: AuthGuard, private router: Router) {
    this.title = '';
    this.content = '';
  }

  ngOnInit() {
    if (this.authGuard.canActivate(null, null)) {
    } else {
      this.router.navigateByUrl('/login');
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
  }
}
