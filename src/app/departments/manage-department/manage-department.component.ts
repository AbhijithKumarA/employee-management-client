import { ToastrService } from 'ngx-toastr';
import { EmployeeManagementService } from './../../shared/employee-management.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Department } from 'src/app/shared/shared.model';

@Component({
  selector: 'app-manage-department',
  templateUrl: './manage-department.component.html',
  styleUrls: ['./manage-department.component.css']
})
export class ManageDepartmentComponent implements OnInit {

  constructor(public service: EmployeeManagementService, private toastr: ToastrService) { }

  

  ngOnInit(): void {
    this.service.refreshEmployeeList();
  }

  onSubmit(form: NgForm) {
    if(this.service.departmentFormData.departmentId == 0) {
      this.addDepartment(form);
    }
    else
    this.editDepartment(form);
  }

  addDepartment(form: NgForm) {
    this.service.postDepartment().subscribe(
      res => {
        this.resetForm(form);
        this.service.refreshDepartmentList();
        this.toastr.success('Added successfully', 'New Department');
      },
      err => { 
        if (err.status == 400) {
          this.toastr.warning(err.error, 'New Department not created');
        }
        else
          console.log(err);
       }
    );
  }

  editDepartment(form: NgForm) {
    this.service.putDepartment().subscribe(
      res => {
        this.resetForm(form);
        this.service.refreshDepartmentList();
        this.toastr.success('Updated successfully', 'Department details');
      },
      err => { 
        if(err.status == 400){
          this.toastr.warning(err.error, 'Department not updated');
        }
        else
          console.log(err);
      }
    );
  }

  resetForm(form: NgForm) {
    form.form.reset();
    this.service.departmentFormData = new Department();
  }

}
