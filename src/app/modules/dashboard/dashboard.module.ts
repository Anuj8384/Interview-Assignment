import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { HeaderComponent } from './header/header.component';
import { EmployeeComponent } from './employee/employee.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    AdminDashboardComponent,
    HeaderComponent,
    EmployeeComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FontAwesomeModule
    
  ]
})
export class DashboardModule { }
