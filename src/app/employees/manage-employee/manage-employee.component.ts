import { EmployeeManagementService } from './../../shared/employee-management.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Employee } from 'src/app/shared/shared.model';

@Component({
  selector: 'app-manage-employee',
  templateUrl: './manage-employee.component.html',
  styleUrls: ['./manage-employee.component.css']
})
export class ManageEmployeeComponent implements OnInit {

  constructor(public service: EmployeeManagementService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.service.refreshDepartmentList();
  }

  onSubmit(f: NgForm) {
    if(this.service.employeeFormData.employeeId == 0) {
      this.addEmployee(f);
    }
    else
    this.editEmployee(f);
  }

  addEmployee(f: NgForm) {
    this.service.postEmployee().subscribe(
      res => {
        this.resetForm(f);
        this.service.refreshEmployeeList();
        this.toastr.success('Added successfully', 'New Employee')
      },
      err => { console.log(err), console.log(f) }
    );
  }

  editEmployee(f: NgForm) {
    this.service.putEmployee().subscribe(
      res => {
        this.resetForm(f);
        this.service.refreshEmployeeList();
        this.toastr.success('Updated successfully', 'Employee Details')
      },
      err => { console.log(err) }
    );
  }

  resetForm(f: NgForm) {
    f.form.reset();
    this.service.employeeFormData = new Employee();
  }

}
