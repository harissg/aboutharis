import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments-component',
  templateUrl: './comments.component.html'
})
export class CommentsComponent implements OnInit {

  @Input() data: Array<Comment>;
  public commentsCount: number;
  public comments: Array<Comment>;
  constructor() {
  }

  ngOnInit() {
    this.commentsCount = this.data.length;
    this.comments = this.data;
  }
}
