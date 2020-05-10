import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments-component',
  templateUrl: './comments.component.html'
})
export class CommentsComponent implements OnInit {

  @Input() data: Array<Comment>;
  public commentsCount: number;
  constructor() {
    console.log("comments:" + this.data);
  }

  ngOnInit() {
    this.commentsCount = this.data.length - 1;
  }
}
