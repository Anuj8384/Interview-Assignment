import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  // baseUrl='http://dummy.restapiexample.com/api/v1/'
  baseUrl = 'https://jsonplaceholder.typicode.com/'
  constructor(private http:HttpClient) { }

  getEmployeeLists(url:string) : Observable<any> {
    return this.http.get<any>(this.baseUrl+url);
  }
}
