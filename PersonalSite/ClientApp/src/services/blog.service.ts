import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BlogPost } from 'src/dto/blogPost';
import { environment } from '../environments/environment';

@Injectable()
export class BlogService {
  private headers: HttpHeaders;
  constructor(private httpClient: HttpClient) {
    this.headers = new HttpHeaders();
    this.headers.append('content-type', 'application/json');
  }

  getBlogPosts(): Observable<Array<BlogPost>> {
    return this.httpClient.get<Array<BlogPost>>(environment.apiBaseUrl + 'blogs/posts', {
      headers: this.headers
    });
  }

  addBlogPost(post: BlogPost): void {
    const body = JSON.stringify(post);
    this.httpClient.post<Array<BlogPost>>(environment.apiBaseUrl + 'blogs/posts', body, {
      headers: this.headers
    });
  }
}
