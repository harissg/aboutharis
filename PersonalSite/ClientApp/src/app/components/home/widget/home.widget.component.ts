import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/services/blog.service';
import { Observable } from 'rxjs';
import { Blog } from 'src/app/model/blog';

@Component({
  selector: 'app-home-widget-component',
  templateUrl: './home.widget.component.html',
  providers: [BlogService]
})
export class HomeWidgetComponent implements OnInit {
  public blog$: Observable<Blog>;

  constructor(private blogService: BlogService) {
  }

  ngOnInit() {
    this.blog$ = this.blogService.getBlog();
  }
}
