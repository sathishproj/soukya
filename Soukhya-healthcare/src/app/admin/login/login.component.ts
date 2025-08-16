import { Component } from '@angular/core';

import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports:[FormsModule]
})
export class LoginComponent {
username = '';
email = '';
  password = '';
  errorMessage = '';
  remember:boolean = false;

  constructor(private authService: AuthService, private router: Router) {}

  onLogin() {
    if (this.authService.login(this.email, this.password)) {
      this.router.navigate(['/dashboard']);
    } else {
      this.errorMessage = 'Invalid username or password';
    }
  }
}