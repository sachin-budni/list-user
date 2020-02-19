import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../service/employee.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {

  // employees:Observable<any>;
  employeeses:any[] = [];
  constructor(private employeeService:EmployeeService,
              private activeRoute:ActivatedRoute) { 

  }

  ngOnInit(): void {
    if(this.employeeses.length == 0){
      this.employeeService.getEmployees.subscribe((d:[])=>{
        d.forEach(data=>{
          this.employeeses.push({
            name:data["name"],
            img_link:data["img_link"],
            designation:data["designation"],
            department:data["department"],
            bio:data["bio"],
            show:false
          })
        });
      })
      setTimeout(() => {
        this.activeRoute.fragment.subscribe(f => {
          if(f){
            document.getElementById(f).scrollIntoView();
          }
        })
      }, 500);
    }
  }

}
