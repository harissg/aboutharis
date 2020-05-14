import { Component, OnInit, Input } from '@angular/core';
import { PostComment } from 'src/app/model/post.comment';
import { PostService } from 'src/services/post.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-comments-widget-component',
  templateUrl: './comments.widget.html'
})
export class CommentsWidgetComponent implements OnInit {
  @Input() data: Array<Comment>;

  constructor(private postService: PostService, private toastr: ToastrService) {

  }

  ngOnInit() {
  }
  // event listener in here to start the adding of a comment, receives a comment object
  addComment(comment: PostComment) {
    this.postService.addPostComment(comment).subscribe((res) => {
      // notification here
      this.toastr.success('Thanks for contributing to the discussion.');
    }, (error) => {
      console.log(error);
    });
  }
}
