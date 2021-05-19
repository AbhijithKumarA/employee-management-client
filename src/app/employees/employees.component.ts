import { UserService } from './../shared/user.service';
import { EmployeeManagementService } from './../shared/employee-management.service';
import { Component, OnInit } from '@angular/core';
import { Employee } from '../shared/shared.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  constructor(public service: EmployeeManagementService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.service.refreshEmployeeList();
  }

  

  populate(selected: Employee) {
    this.service.employeeFormData = Object.assign({}, selected)
  }

  onDelete(id: number) {
    if(confirm('Are you sure you want to delete this employee?'))
    {
      this.service.deleteEmployee(id).subscribe(
        res => {
          this.service.refreshEmployeeList();
          this.toastr.error('Deleted successfully', 'Employee details');
        },
        err => { console.log(err); }
      );
    }
  }

}
