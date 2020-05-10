import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Post } from 'src/app/model/post';
import { PostDTO } from 'src/dto/postDTO';
import { Observable } from 'rxjs';

@Injectable()
export class PostService {
  public headers: HttpHeaders;
  public params: HttpParams;
  constructor(private httpClient: HttpClient) {
    this.headers = new HttpHeaders();
    this.headers.append('content-type', 'application/json');
  }

  get(limit: number) {
    return this.httpClient.get<Array<Post>>(environment.apiBaseUrl + 'posts?limit=' + limit, {
      headers: this.headers
    });
  }

  getById(id: string): Observable<Post> {
    return this.httpClient.get<Post>(environment.apiBaseUrl + 'posts/' + id, {
      headers: this.headers
    });
  }

  add(post: PostDTO): void {
    const body = JSON.stringify(post);
    this.httpClient.post<Array<PostDTO>>(environment.apiBaseUrl + 'blogs/posts', body, {
      headers: this.headers
    });
  }
}
