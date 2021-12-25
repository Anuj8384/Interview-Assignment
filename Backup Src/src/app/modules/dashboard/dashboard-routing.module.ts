import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { EmployeeComponent } from './employee/employee.component';

const routes: Routes = [
  { 
    path: '',
    component:AdminDashboardComponent,
    children: [
      { path: 'employee', component: EmployeeComponent },
      
      { path: '', redirectTo: '/admin/employee', pathMatch: 'full' },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
