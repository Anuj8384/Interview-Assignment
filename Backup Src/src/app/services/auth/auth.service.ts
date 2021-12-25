import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) {}

  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isLoggedIn() {
    return this.getToken() !== null;
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }

  register({ email,lname,fname, password }: any) {
    sessionStorage.setItem('email',email);
    sessionStorage.setItem('pwd',password);
    sessionStorage.setItem('fullname',`${fname} ${lname}`);
  }

  login({ email, password }: any): Observable<any> {
     if (sessionStorage.getItem('email') === email && sessionStorage.getItem('pwd') === password) {
      this.setToken('abcdefghijklmnopqrstuvwxyz');
      return of({ name: sessionStorage.getItem('fullname')});
    }
    return throwError(new Error('Failed to login'));
  }
}
