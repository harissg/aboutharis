// display amount of blogs

import { Component, OnInit, Renderer2, ElementRef, ViewChild } from '@angular/core';
import { Post } from 'src/app/model/post';
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
  }

  formatContent(content: string) {
    const div: HTMLParagraphElement = this.renderer.createElement('div');
    div.innerHTML = content;
    this.renderer.appendChild(this.div.nativeElement, div);
  }

}
