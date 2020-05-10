import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { CommentService } from 'src/services/comment.service';

@Component({
  selector: 'app-comments-widget-component',
  templateUrl: './comments.widget.html'
})
export class CommentsWidgetComponent implements OnInit {
  public comments$: Observable<Array<Comment>>;
  @Input() data: Array<Comment>;
  constructor(private commentService: CommentService) {

  }

  ngOnInit() {
  }

}
