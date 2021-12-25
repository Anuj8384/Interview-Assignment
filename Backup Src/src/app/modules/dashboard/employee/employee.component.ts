import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IEmployee } from 'src/app/model/employee.model';
import { EmployeeService } from 'src/app/services/data/employee.service';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  employeeData :any=[];
  employee:any;
  view:boolean = true;
  constructor(private dataservice:EmployeeService) { }

  ngOnInit(): void {
    // users/ employees
    this.dataservice.getEmployeeLists("users").subscribe(data => {
      this.employeeData = data;
      console.log(this.employeeData);
    },(err:HttpErrorResponse)=>{
      console.log(`Status ${err.status} and Status Code ${err.statusText}` );
    })
  }

  back() {
    this.view = true
  }
  viewEmployee(user:any){
    this.employee = user;
    this.view = false;
  }

}
