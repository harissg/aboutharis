// display amount of blogs

import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/model/post';
import { Blog } from 'src/app/model/blog';

@Component({
  selector: 'app-blogs-component',
  templateUrl: './blog.post.component.html'
})
export class BlogPostComponent implements OnInit {
  @Input() take: number;
  @Input() sortBy: string;
  @Input() data: Blog;
  public posts: Array<Post>;

  constructor() {
  }

  ngOnInit() {
    this.posts = [];
    this.take = 0;
    this.sortBy = 'desc';
    this.posts.push(...this.data.posts);
  }
}
