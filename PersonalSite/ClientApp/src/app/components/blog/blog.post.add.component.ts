import { Component, OnInit } from '@angular/core';
import { AuthGuard } from 'src/app/auth/authGuard';
import { Post } from 'src/app/model/post';
import { PostDTO } from 'src/dto/postDTO';
import { PostService } from 'src/services/post.service';
import { Router } from '@angular/router';
import { ToolbarService, LinkService, ImageService, HtmlEditorService, RichTextEditor } from '@syncfusion/ej2-angular-richtexteditor';
import { Blog } from 'src/app/model/blog';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-blog-post-add',
  templateUrl: './blog.post.add.component.html',
  providers: [PostService, AuthGuard]
})
export class BlogPostAddComponent implements OnInit {
  title: string;
  content: string;
  public tools: object = {
 type: 'Expand',
 items: ['Bold', 'Italic', 'Underline', 'StrikeThrough',
'FontName', 'FontSize', 'FontColor', 'BackgroundColor',
'LowerCase', 'UpperCase', '|',
'Formats', 'Alignments', 'OrderedList', 'UnorderedList',
'Outdent', 'Indent', '|',
'CreateLink', 'Image', '|', 'ClearFormat', 'Print',
'SourceCode', 'FullScreen', '|', 'Undo', 'Redo', 'InsertCode']
  };

  constructor(private postService: PostService, private authGuard: AuthGuard
 , private router: Router, private toastr: ToastrService) {
 this.title = '';
 this.content = '';
  }

  ngOnInit() {
 if (this.authGuard.canActivate(null, null)) {
 } else {
this.router.navigateByUrl('/login');
 }
  }
  add(): void {
 const dto: PostDTO = new PostDTO();
 const blog: Blog = JSON.parse(sessionStorage.getItem('blogdata'));
 if (blog != null) {
dto.BlogId = blog.blogId; // get from local storage
dto.title = this.title;
dto.content = this.content;
this.postService.add(dto).subscribe((res) => {
  this.toastr.success('A new post added');
  this.clear();
}, (error) => {
  this.toastr.error('Aerror occurred.');
  console.log(error);
});
 } else {
this.toastr.error('A blog cannot be empty!');
 }
  }

  cancel(): void {
 this.title = '';
 this.content = '';
  }

  clear(): void {
 this.title = '';
 this.content = '';
  }
}
