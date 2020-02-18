import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class EmployeeService {

  constructor(private http:HttpClient) { }

  get getEmployees(){
    return this.http.get('assets/data.json');
  }
}
