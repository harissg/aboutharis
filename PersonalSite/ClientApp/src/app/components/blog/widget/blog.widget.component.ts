import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/services/blog.service';
import { BlogPost } from 'src/dto/blogPost';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-blog-widget-component',
  templateUrl: './blog.widget.component.html',
  providers: [BlogService]
})
export class BlogWidgetComponent implements OnInit {
  private blogsObs: Observable<Array<BlogPost>>;

  constructor(private blogService: BlogService) {
  }

  ngOnInit() {
    this.blogsObs = this.blogService.getBlogPosts();
  }
}
