// display amount of blogs

import { Component, Input, OnInit, Renderer2, ElementRef, ViewChild } from '@angular/core';
import { Post } from 'src/app/model/post';
import { Blog } from 'src/app/model/blog';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from 'src/services/post.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-blogs-component',
  templateUrl: './blog.post.component.html'
})
export class BlogPostComponent implements OnInit {
  public post: Post;
  public post$: Observable<Post>;
  @ViewChild('content', { static: true }) div: ElementRef;

  constructor(private renderer: Renderer2, private activeRoute: ActivatedRoute,
    private postService: PostService, private router: Router) {
  }

  ngOnInit() {
    this.post = new Post();
    const postId = this.activeRoute.snapshot.queryParams['id'];
    this.post$ = this.postService.getById(postId);
    this.post$.subscribe((res) => {
      this.post.title = res.title;
      this.post.content = res.content;
      this.post.comments = res.comments;
      this.formatContent(this.post.content); // for now only 1
    });
    // this.formatContent("<h1>Title</h1><p>First para</p><p>Second para</p><h2>Subhead2</h2><p>foo</p><p>foo</p><h3></h3><p>foo3</p>"); // for now only 1
  }

  formatContent(content: string) {
    // first set title header
    // const head: HTMLParagraphElement = this.renderer.createElement('h1');
    // head.innerHTML = title;
    // this.renderer.appendChild(this.div.nativeElement, head);
    /**structure head para h2 para h3 para so on */
    // let count = 1;
    // // lets start process sub headers and paragraph content
    // let temp = content.split('</h' + count + '>');
    // debugger;
    // count += 1;
    const div: HTMLParagraphElement = this.renderer.createElement('div');
    div.innerHTML = content;
    this.renderer.appendChild(this.div.nativeElement, div);
  }

  parse(value: string): string {
    let newValue: string = '';



    return newValue;
  }
}
