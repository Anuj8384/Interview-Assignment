import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loginUrl=environment.baseUrlLogin;

  constructor(private router: Router,private http:HttpClient) {}

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

  

  login({ email, password }: any): Observable<any> {
    const reqHeader = new HttpHeaders({ 'username': email, 'password': password });
    return this.http.get<any>(this.loginUrl,{headers:reqHeader});
  }
}
