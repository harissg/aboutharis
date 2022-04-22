import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { Blog } from 'src/app/model/blog';

@Injectable()
export class BlogService {
  private headers: HttpHeaders;
  constructor(private httpClient: HttpClient) {
 this.headers = new HttpHeaders();
 this.headers.append('content-type', 'application/json');
  }

  getBlog(): Observable<Blog> {
 returthis.httpClient.get<Blog>(environment.apiBaseUrl + 'blogs', {
headers: this.headers
 });
  }
}
