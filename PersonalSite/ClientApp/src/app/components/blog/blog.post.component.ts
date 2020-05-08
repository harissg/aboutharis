// display amount of blogs

import { Component, Input, OnInit } from '@angular/core';
import { BlogPost } from 'src/dto/blogPost';
import { Post } from 'src/app/model/post';

@Component({
  selector: 'app-blogs-component',
  templateUrl: './blog.post.component.html'
})
export class BlogPostComponent implements OnInit {
  @Input() take: number;
  @Input() sortBy: string;
  @Input() blogPosts: Array<BlogPost>;
  constructor() {
    this.take = 0;
    this.sortBy = 'desc';
    console.log("ctor");
    console.log(this.blogPosts);
  }

  ngOnInit() {
    this.blogPosts = [];
    console.log("oninit")
    console.log(this.blogPosts);
    // let bp = new BlogPost();
    // bp.BlogId = 1;
    // bp.AuthorId = 1;
    // let post = new Post();
    // post.content = 'some context';
    // post.title = 'first post';
    // bp.Post = post;

    this.blogPosts.push(...this.blogPosts);
  }
}
