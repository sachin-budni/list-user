import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';


const routes: Routes = [
  {
    path:'',component:EmployeesComponent
  },
  {
    path:'employee-details/:id',component:EmployeeDetailsComponent
  },
  {
    path:'**',redirectTo:"",pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
