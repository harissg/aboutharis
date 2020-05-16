import { Component } from "@angular/core";
import { AuthService } from "src/services/auth.service";
import { UserDTO } from "src/dto/userDTO";
import { Router } from "@angular/router";

@Component({
  selector: 'app-login-component',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  public username: string;
  public password: string;

  constructor(private authService: AuthService, private router: Router) { }

  login() {
    const user = new UserDTO();

    this.authService.AuthenticateUser(user)
      .subscribe((response) => {
        localStorage.setItem('user', JSON.stringify(user));
        // redirect to blog add
        this.router.navigateByUrl('/add');
      }, (error) => {
        alert('Invalid credentials');
      });
  }
}
