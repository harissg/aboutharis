import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { RichTextEditorAllModule } from '@syncfusion/ej2-angular-richtexteditor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './components/home/home.component';
import { BlogService } from 'src/services/blog.service';
import { BlogPostAddComponent } from './components/blog/blog.post.add.component';
import { BlogPostComponent } from './components/blog/blog.post.component';
import { AuthGuard } from './auth/authGuard';
import { PostService } from 'src/services/post.service';
import { LoginComponent } from './components/login/login.component';
import { CommentsComponent } from './components/comments/comments.component';
import { CommentsWidgetComponent } from './components/comments/widget/comments.widget.component';
import { AuthService } from 'src/services/auth.service';
import { HomeWidgetComponent } from './components/home/widget/home.widget.component';
import { BlogPostListComponent } from './components/blog/blog.post.list.component';
import { CommentService } from 'src/services/comment.service';
import { NavFooterComponent } from './components/nav-footer/nav-footer.component';
import { CommentsAddComponent } from './components/comments/comments-add/comments-add.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    HomeWidgetComponent,
    BlogPostAddComponent,
    BlogPostComponent,
    LoginComponent,
    CommentsComponent,
    CommentsWidgetComponent,
    BlogPostListComponent,
    CommentsWidgetComponent,
    NavFooterComponent,
    CommentsAddComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeWidgetComponent, pathMatch: 'full', data: {animation: 'HomePage'} },
      { path: 'post', component: BlogPostComponent, data: {animation: 'FilterPage'} },
      { path: 'add', component: BlogPostAddComponent, canActivate: [AuthGuard] },
      { path: 'login', component: LoginComponent }
    ]),
    RichTextEditorAllModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [BlogService, AuthGuard, PostService, AuthService, CommentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
