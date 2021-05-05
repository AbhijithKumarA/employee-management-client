import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Employee } from './shared.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeManagementService {

  constructor(private http: HttpClient) { }

  readonly baseURL = "http://localhost:59132/api";

  employeeFormData : Employee = new Employee();
  employeeList : Employee[];

  postEmployee() {
    return this.http.post(`${this.baseURL}/Emp`, this.employeeFormData);
  }

  putEmployee() {
    return this.http.put(`${this.baseURL}/Emp/${this.employeeFormData.employeeId}`, this.employeeFormData);
  }

  deleteEmployee(id: number) {
    return this.http.delete(`${this.baseURL}/Emp/${this.employeeFormData.employeeId}`);
  }

  refreshEmployeeList() {
    this.http.get(`${this.baseURL}/Emp`)
    .toPromise()
    .then(res => this.employeeList = res as Employee[]);
  }
}
