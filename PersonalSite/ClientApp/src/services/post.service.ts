import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Post } from 'src/app/model/post';
import { PostDTO } from 'src/dto/postDTO';
import { Observable } from 'rxjs';
import { PostComment } from 'src/app/model/post.comment';

@Injectable()
export class PostService {
  public headers: HttpHeaders;
  public params: HttpParams;
  constructor(private httpClient: HttpClient) { }

  get(limit: number) {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.httpClient.get<Array<Post>>(environment.apiBaseUrl + 'posts?limit=' + limit, httpOptions);
  }

  getById(id: string): Observable<Post> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.httpClient.get<Post>(environment.apiBaseUrl + 'posts/' + id, httpOptions);
  }

  add(post: PostDTO): Observable<PostDTO[]> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    const body = JSON.stringify(post);
    return this.httpClient.post<Array<PostDTO>>(environment.apiBaseUrl + 'posts', body, httpOptions);
  }

  getPostComments(id: string): Observable<Array<PostComment>> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.httpClient.get<Array<PostComment>>(environment.apiBaseUrl + 'posts/' + id + 'comments', httpOptions);
  }

  addPostComment(comment: PostComment): Observable<object> {
    const body = JSON.stringify(comment);
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.httpClient.post(environment.apiBaseUrl + 'posts/' + comment.postId + '/comments', body, httpOptions);
  }

  update(post: Partial<PostDTO>): Observable<object> {
    const body = JSON.stringify(post);
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.httpClient.put(environment.apiBaseUrl + 'posts/' + body, httpOptions);
  }
}
