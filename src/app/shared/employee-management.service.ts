import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Employee, Department } from './shared.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeManagementService {

  constructor(private http: HttpClient) { }

  readonly baseURL = "http://localhost:59132/api";

  employeeFormData : Employee = new Employee();
  employeeList : Employee[];

  departmentFormData : Department = new Department();
  departmentList : Department[];

  //EMPLOYEE ACTIONS

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

  //DEPARTMENT ACTIONS

  postDepartment() {
    return this.http.post(`${this.baseURL}/Dept`, this.departmentFormData);
  }

  putDepartment() {
    return this.http.put(`${this.baseURL}/Dept/${this.departmentFormData.departmentId}`, this.departmentFormData);
  }

  deleteDepartment(id: number) {
    return this.http.delete(`${this.baseURL}/Dept/${id}`);
  }

  refreshDepartmentList() {
    this.http.get(`${this.baseURL}/Dept`)
    .toPromise()
    .then(res => this.departmentList = res as Department[]);
  }
}
