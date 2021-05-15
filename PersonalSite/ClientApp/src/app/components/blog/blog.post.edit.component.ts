import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { AuthGuard } from "src/app/auth/authGuard";
import { Post } from "src/app/model/post";
import { PostService } from "src/services/post.service";
import { ToolbarService, LinkService, ImageService, HtmlEditorService } from '@syncfusion/ej2-angular-richtexteditor'
import { ToastrService } from 'ngx-toastr';
import { Location } from '@angular/common'
@Component({
    selector: 'app-blogs-edit-component',
    templateUrl: './blog.post.edit.component.html',
    providers: [ToolbarService, LinkService, ImageService, HtmlEditorService, ToastrService]
})
export class BlogPostEditComponent implements OnInit {

    private postId: string;
    private post: Post;
    public content: string;
    public title: string;
    public tools: object = {
        type: 'Expand',
        items: ['Bold', 'Italic', 'Underline', 'StrikeThrough',
            'FontName', 'FontSize', 'FontColor', 'BackgroundColor',
            'LowerCase', 'UpperCase', '|',
            'Formats', 'Alignments', 'OrderedList', 'UnorderedList',
            'Outdent', 'Indent', '|',
            'CreateLink', 'Image', '|', 'ClearFormat', 'Print',
            'SourceCode', 'FullScreen', '|', 'Undo', 'Redo', 'InsertCode', 'Image']
    };
    constructor(private authGuard: AuthGuard
        , private router: Router, private activeRoute: ActivatedRoute
        , private postService: PostService, private toastr: ToastrService, private location: Location) { }

    ngOnInit() {
        this.activeRoute.queryParams.subscribe(params => {
            this.postId = params.id;
        });

        if (this.authGuard.canActivate(null, null)) {
        } else {
            this.router.navigateByUrl('/login');
        }

        let post$ = this.postService.getById(this.postId);
        post$.subscribe((res) => {
            this.post = res;
            this.content = this.post.content;
            this.title = this.post.title;
        })
    }

    cancel() {
        this.router.navigateByUrl('post', { queryParams: { "id": this.postId } });
    }

    update() {
        this.post.content = this.content;
        this.postService.update(this.post).subscribe((res) => {
            this.toastr.success('Post has been updated.');
            this.location.back();
        });
    }
}