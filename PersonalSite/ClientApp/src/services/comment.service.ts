import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';

@Injectable()
export class CommentService {

  constructor(private httpClient: HttpClient) {
  }

  get(id: string): Observable<Array<Comment>> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.httpClient.get<Array<Comment>>(environment.apiBaseUrl + 'posts/' + id + 'comments', httpOptions);
  }
}
