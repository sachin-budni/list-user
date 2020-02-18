import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../service/employee.service';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent implements OnInit {

  employeeDetails:Observable<any>;
  index:any = 0;
  constructor(private eployeeService:EmployeeService,private activateRoute:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe(route=>{
      if(route.id){
        this.index = route.id;
        this.employeeDetails = this.eployeeService.getEmployees.pipe(
          map(d=>{
            return d[route.id];
          })
        )
      }
    })
  }

  go(){
    if(this.index > 7){
      this.router.navigate(['employee-details/',8]);
    }else{
      let value = parseInt(this.index,10)+1
      this.router.navigate(['employee-details/',value]);
    }
  }
  back(){
    if(this.index < 1){
      this.router.navigate(['employee-details/',0]);
    }else{
      let value = parseInt(this.index,10)-1
      this.router.navigate(['employee-details/',value]);
    }
  }
}
