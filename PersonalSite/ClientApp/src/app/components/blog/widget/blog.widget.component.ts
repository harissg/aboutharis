import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/services/blog.service';
import { Observable } from 'rxjs';
import { Blog } from 'src/app/model/blog';

@Component({
  selector: 'app-blog-widget-component',
  templateUrl: './blog.widget.component.html',
  providers: [BlogService]
})
export class BlogWidgetComponent implements OnInit {
  private blogObs: Observable<Blog>;

  constructor(private blogService: BlogService) {
  }

  ngOnInit() {
    this.blogObs = this.blogService.getBlog();
  }
}
