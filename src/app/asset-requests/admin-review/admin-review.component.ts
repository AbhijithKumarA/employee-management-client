import { ToastrService } from 'ngx-toastr';
import { AssetManagementService } from './../../shared/asset-management.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AssetRequest } from 'src/app/shared/shared.model';

@Component({
  selector: 'app-admin-review',
  templateUrl: './admin-review.component.html',
  styleUrls: ['./admin-review.component.css']
})
export class AdminReviewComponent implements OnInit {

  saved = localStorage.getItem('user');
  user = JSON.parse(this.saved || '');

  constructor(public service: AssetManagementService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  approve(f: NgForm) {
    this.service.assetRequestFormData.approved = true;
    this.service.assetRequestFormData.approvedById = this.user.employeeId;
    console.log(this.service.assetRequestFormData);
    this.onSubmit(f);
  }

  reject(f: NgForm) {
    this.service.assetRequestFormData.approved = false;
    this.service.assetRequestFormData.approvedById = this.user.employeeId;
    this.onSubmit(f);
  }

  onSubmit(f: NgForm) {
    this.service.putAdminReview().subscribe(
      res => {
        if (this.service.assetRequestFormData.approved == true) {
          this.toastr.success('Approved successfully', 'Asset Request');
        }
        else if(this.service.assetRequestFormData.approved == false){
          this.toastr.error('Rejected successfully', 'Asset Request');
        }        
        this.resetForm(f);
        this.service.refreshAssetRequestList();
      },
      err => { console.log(err) }
    );
  }

  resetForm(f: NgForm) {
    f.form.reset();
    this.service.assetRequestFormData = new AssetRequest();
  }

}
