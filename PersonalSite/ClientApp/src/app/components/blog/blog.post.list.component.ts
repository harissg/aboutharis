import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/model/post';
import { PostService } from 'src/services/post.service';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-blog-post-list',
  templateUrl: './blog.post.list.component.html'
})
export class BlogPostListComponent implements OnInit {
  @Input() data: Array<Post>;
  @Input() type: string;
  public displayType: string;
  constructor(private postService: PostService, private router: Router) { }

  ngOnInit() {
    this.displayType = this.type;
  }

  viewPost(id: string) {
    this.postService.getById(id).subscribe((response) => {
      // Set our navigation extras object
      // that contains our global query params
      const data = JSON.stringify(response);
      const navigationExtras: NavigationExtras = {
        queryParams: { 'id': response.postId }
      };
      // Navigate to the login page with extras
      this.router.navigate(['/post'], navigationExtras);
    });
  }
}
