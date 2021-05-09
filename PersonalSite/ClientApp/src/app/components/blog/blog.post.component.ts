// display amount of blogs

import { Component, OnInit, Renderer2, ElementRef, ViewChild } from '@angular/core';
import { Post } from 'src/app/model/post';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { PostService } from 'src/services/post.service';
import { Observable } from 'rxjs';
import { UserDTO } from 'src/dto/userDTO';
import { AuthGuard } from 'src/app/auth/authGuard';

@Component({
  selector: 'app-blogs-component',
  templateUrl: './blog.post.component.html'
})
export class BlogPostComponent implements OnInit {
  public post: Post;
  public post$: Observable<Post>;
  public user: UserDTO;
  public isEditable: boolean = false;

  @ViewChild('content', { static: true }) div: ElementRef;

  constructor(private renderer: Renderer2, private activeRoute: ActivatedRoute,
    private postService: PostService, private router: Router, private authGuard: AuthGuard) {
  }

  ngOnInit() {
    // so we can edit posts
    let user = localStorage.getItem('user');
    if (user) {
      this.isEditable = true;
    } else {
      this.isEditable = false;
    }
    this.post = new Post();
    const postId = this.activeRoute.snapshot.queryParams['id'];
    this.post$ = this.postService.getById(postId);
    this.post$.subscribe((res) => {
      this.post.title = res.title;
      this.post.content = res.content;
      this.post.comments = res.comments;
      this.post.postId = res.postId;
      this.formatContent(this.post.content); // for now only 1
    });
  }

  formatContent(content: string) {
    const div: HTMLParagraphElement = this.renderer.createElement('div');
    div.innerHTML = content;
    this.renderer.appendChild(this.div.nativeElement, div);
  }

  editPost(id: string) {
    const navigationExtras: NavigationExtras = {
      queryParams: { 'id': id }
    };
    this.router.navigate(['edit'], navigationExtras);
  }
}
