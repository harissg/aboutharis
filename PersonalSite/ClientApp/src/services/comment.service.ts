import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';

@Injectable()
export class CommentService {

  constructor(private httpClient: HttpClient) {
  }


}
