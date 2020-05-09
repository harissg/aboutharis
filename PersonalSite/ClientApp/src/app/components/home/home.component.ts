import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/services/blog.service';
import { PostService } from 'src/services/post.service';
import { Observable } from 'rxjs';
import { Post } from 'src/app/model/post';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  providers: [BlogService]
})
export class HomeComponent implements OnInit {
  public post$: Observable<Array<Post>>;
  public posts: Array<Post>;
  constructor(private postService: PostService) { }

  ngOnInit() {
    this.posts = [];
    const limitBy = 3;
    this.post$ = this.postService.get(limitBy);
    this.post$.subscribe((response) => {
      console.log('inside home post obs subsri');
      console.log(response);
      this.posts.push(...response);
    });
  }
}
