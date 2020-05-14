import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { PostComment } from 'src/app/model/post.comment';
import { PostService } from 'src/services/post.service';

@Component({
  selector: 'app-comments-widget-component',
  templateUrl: './comments.widget.html'
})
export class CommentsWidgetComponent implements OnInit {
  @Input() data: Array<Comment>;

  constructor(private postService: PostService) {

  }

  ngOnInit() {
  }
  // event listener in here to start the adding of a comment, receives a comment object
  addComment(comment: PostComment) {
    this.postService.addPostComment(comment).subscribe((res) => {
      alert('added comment');
    }, (error) => {
      console.log(error);
    });
  }
}
