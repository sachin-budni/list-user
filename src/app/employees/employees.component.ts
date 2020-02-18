import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../service/employee.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {

  // employees:Observable<any>;
  employeeses:any[] = [];
  constructor(private employeeService:EmployeeService) { }

  ngOnInit(): void {
    if(this.employeeses.length == 0){
      this.employeeService.getEmployees.subscribe((d:[])=>{
        d.map(data=>{
          this.employeeses.push({
            name:data["name"],
            img_link:data["img_link"],
            designation:data["designation"],
            department:data["department"],
            bio:data["bio"],
            show:false
          })
        })
      })
    }
    // this.employees = this.employeeService.getEmployees.pipe(
    //   map((d:[])=>{
    //     return d.map(dt=>{
    //       return {
    //         name:dt["name"],
    //         img_link:dt["img_link"],
    //         designation:dt["designation"],
    //         department:dt["department"],
    //         bio:dt["bio"],
    //         show:false
    //       };
    //     });
    //   })
    // )
  }

}
