import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { EmployeeComponent } from './components/employee/employee.component';

const routes: Routes = [
  { 
    path: '',
    component:AdminDashboardComponent,
    children: [
      { path: 'employee', component: EmployeeComponent },
      { path: 'employee/id', component: EmployeeListComponent },
      { path: '', redirectTo: '/admin/employee', pathMatch: 'full' },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
