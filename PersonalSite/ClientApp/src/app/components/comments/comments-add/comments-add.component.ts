import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { PostComment } from 'src/app/model/post.comment';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-comments-add',
  templateUrl: './comments-add.component.html',
  styleUrls: ['./comments-add.component.css']
})
export class CommentsAddComponent implements OnInit {
  public comment: string;
  public name: string;
  public email: string;
  @Output() addCommentEvent = new EventEmitter<PostComment>();
  public postId: string;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.comment = '';
    this.email = '';
    this.name = '';
    this.postId = this.activatedRoute.snapshot.queryParams['id'];
  }
  // broadcast
  addComment() {
    const post = new PostComment();
    if (this.comment === '' || this.email === '' || this.name === '') {
      alert('Please fill out all info');
      return;
    }
    post.content = this.comment;
    post.email = this.email;
    post.postId = this.postId;
    post.authorName = this.name;
    this.addCommentEvent.emit(post);
  }

  cancel() {
    this.comment = '';
    this.email = '';
    this.postId = '';
    this.name = '';
  }
}
