import { Component, OnInit, Input } from '@angular/core';
import { BlogService } from 'src/services/blog.service';
import { Observable } from 'rxjs';
import { Post } from 'src/app/model/post';
import { Blog } from 'src/app/model/blog';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  providers: [BlogService]
})
export class HomeComponent implements OnInit {
  public post$: Observable<Array<Post>>;
  public posts: Array<Post>;
  constructor() { }
  @Input() data: Blog;

  ngOnInit() {
    this.posts = [];
    this.posts = this.data.posts;
  }
}
