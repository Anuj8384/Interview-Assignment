import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { HeaderComponent } from './header/header.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';


@NgModule({
  declarations: [
    AdminDashboardComponent,
    HeaderComponent,
    EmployeeComponent,
    EmployeeListComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FontAwesomeModule
    
  ]
})
export class DashboardModule { }
