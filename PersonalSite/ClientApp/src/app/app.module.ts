import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './components/home/home.component';
import { BlogWidgetComponent } from './components/blog/widget/blog.widget.component';
import { BlogService } from 'src/services/blog.service';
import { BlogPostAddComponent } from './components/blog/blog.post.add.component';
import { BlogPostComponent } from './components/blog/blog.post.component';
import { AuthGuard } from './auth/authGuard';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    BlogWidgetComponent,
    BlogPostAddComponent,
    BlogPostComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'blog', component: BlogWidgetComponent, children:[
        { path: 'add', component: BlogPostAddComponent, canActivate: [AuthGuard] },
      ] },
      { path: 'cv', component: BlogWidgetComponent },
    ])
  ],
  providers: [BlogService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
