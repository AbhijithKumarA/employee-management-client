import { UserService } from './../../shared/user.service';
import { AssetRequest } from './../../shared/shared.model';
import { ToastrService } from 'ngx-toastr';
import { AssetManagementService } from './../../shared/asset-management.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-manage-asset-requests',
  templateUrl: './manage-asset-requests.component.html',
  styleUrls: ['./manage-asset-requests.component.css']
})
export class ManageAssetRequestsComponent implements OnInit {

  saved = localStorage.getItem('user');
  user = JSON.parse(this.saved || '');

  constructor(public service: AssetManagementService, private toastr: ToastrService, private users: UserService) { }

  ngOnInit(): void {
    this.service.refreshAssetList();
    this.service.assetRequestFormData.requestingEmployeeId = this.user.employeeId;
  }

  onSubmit(f: NgForm) {
    if(this.service.assetRequestFormData.assetRequestId == 0) {
      this.addAssetRequest(f);
    }
    else
    this.editAssetRequest(f);
  }

  addAssetRequest(f: NgForm) {
    this.service.postAssetRequest().subscribe(
      res => {
        this.resetForm(f);
        this.service.refreshEmployeeAssetRequestList(this.user.employeeId);
        this.toastr.success('Created successfully', 'New Asset Request')
      },
      err => { console.log(err) }
    );
  }

  editAssetRequest(f: NgForm) {
    this.service.assetRequestFormData.requestingEmployeeId = this.user.employeeId;
    this.service.putAssetRequest().subscribe(
      res => {
        this.resetForm(f);
        this.service.refreshEmployeeAssetRequestList(this.user.employeeId);
        this.toastr.success('Updated successfully', 'Asset Request')
      },
      err => { console.log(err) }
    );
  }

  resetForm(f: NgForm) {
    f.form.reset();
    this.service.assetRequestFormData = new AssetRequest();
  }

}
