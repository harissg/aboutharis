import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';
import { UserDTO } from 'src/dto/userDTO';

@Injectable()
export class AuthService {
  public headers: HttpHeaders;
  constructor(private httpClient: HttpClient) {
    this.headers = new HttpHeaders();
    this.headers.append('content-type', 'application/json');
  }

  AuthenticateUser(user: UserDTO) {
    const body = JSON.stringify(user);
    return this.httpClient.post(environment.apiBaseUrl + 'users', body, {
      headers: this.headers
    });
  }
}
