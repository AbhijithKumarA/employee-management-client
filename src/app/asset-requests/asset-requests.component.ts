import { ToastrService } from 'ngx-toastr';
import { AssetManagementService } from './../shared/asset-management.service';
import { Component, OnInit } from '@angular/core';
import { AssetRequest } from '../shared/shared.model';

@Component({
  selector: 'app-asset-requests',
  templateUrl: './asset-requests.component.html',
  styleUrls: ['./asset-requests.component.css']
})
export class AssetRequestsComponent implements OnInit {

  saved = localStorage.getItem('user');
  user = JSON.parse(this.saved || '');

  constructor(public service: AssetManagementService, private toastr: ToastrService) { }

  ngOnInit(): void {
    if (this.user.departmentName==='SFM' || this.user.departmentName==='Human Resources') {
      this.service.refreshAssetRequestList();
    }
    else
      this.service.refreshEmployeeAssetRequestList(this.user.employeeId);    
  }

  populate(selected: AssetRequest) {
    this.service.assetRequestFormData = Object.assign({}, selected)
  }

  onDelete(id: number) {
    if(confirm('Are you sure you want to delete this asset request?'))
    {
      this.service.deleteAssetRequest(id).subscribe(
        res => {
          this.service.refreshEmployeeAssetRequestList(this.user.employeeId);
          this.toastr.error('Deleted successfully', 'Asset request');
        },
        err => { console.log(err); }
      );
    }
  }
}