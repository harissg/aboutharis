import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';
import { UserDTO } from 'src/dto/userDTO';

@Injectable()
export class AuthService {
  public headers: HttpHeaders;
  constructor(private httpClient: HttpClient) {
  }

  AuthenticateUser(user: UserDTO) {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
    const body = JSON.stringify(user);
    return this.httpClient.post(environment.apiBaseUrl + 'users', body, httpOptions);
  }
}
