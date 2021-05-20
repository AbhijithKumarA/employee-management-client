import { EmployeeManagementService } from './../shared/employee-management.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Department } from '../shared/shared.model';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent implements OnInit {

  constructor(public service: EmployeeManagementService, private toastr: ToastrService) { }

  populate(selectedDep: Department) {
    this.service.departmentFormData = Object.assign({}, selectedDep);
  }

  onDelete(id: number) {
    if(confirm("Are you sure you want to delete this department?"))
    {
      this.service.deleteDepartment(id).subscribe(
        res => {
          this.service.refreshDepartmentList();
          this.toastr.error('Deleted successfully', 'Department details');
        },
        err => { 
          if(err.status == 400){
            this.toastr.warning(err.error, 'Department not deleted');
          }
          else
            console.log(err);
        }
      );
    }
  }

  ngOnInit(): void {
    this.service.refreshDepartmentList();
  }

}
