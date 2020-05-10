import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { RichTextEditorAllModule } from '@syncfusion/ej2-angular-richtexteditor';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './components/home/home.component';
import { BlogService } from 'src/services/blog.service';
import { BlogPostAddComponent } from './components/blog/blog.post.add.component';
import { BlogPostComponent } from './components/blog/blog.post.component';
import { AuthGuard } from './auth/authGuard';
import { PostService } from 'src/services/post.service';
import { LoginComponent } from './components/login/login.component';
import { CVComponent } from './components/cv/cv.component';
import { CommentsComponent } from './components/comments/comments.component';
import { CommentsWidgetComponent } from './components/comments/widget/comments.widget.component';
import { AuthService } from 'src/services/auth.service';
import { HomeWidgetComponent } from './components/home/widget/home.widget.component';
import { BlogPostListComponent } from './components/blog/blog.post.list.component';

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
    CVComponent,
    BlogPostListComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeWidgetComponent, pathMatch: 'full' },
      { path: 'blog', component: BlogPostComponent },
      { path: 'add', component: BlogPostAddComponent, canActivate: [AuthGuard] },
      { path: 'cv', component: CVComponent },
      { path: 'login', component: LoginComponent }
    ]),
    RichTextEditorAllModule
  ],
  providers: [BlogService, AuthGuard, PostService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
