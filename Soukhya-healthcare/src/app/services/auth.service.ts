import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = false;

  constructor(private router:Router ) { }

    private loginStatus = new BehaviorSubject<boolean>(false);
  loginStatus$ = this.loginStatus.asObservable();

  login(username: string, password: string) {
    // example success
    if (username === 'admin' && password === '1234') {
      localStorage.setItem('token', 'dummy-jwt-token');
      this.loginStatus.next(true);
      return true;
    }
    return false;
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }

  logout() {
    localStorage.removeItem('token');
    this.loginStatus.next(false);
  }
}