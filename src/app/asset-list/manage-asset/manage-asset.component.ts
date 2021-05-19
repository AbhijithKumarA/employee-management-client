import { EmployeeManagementService } from './../../shared/employee-management.service';
import { ToastrService } from 'ngx-toastr';
import { AssetManagementService } from './../../shared/asset-management.service';
import { Component, OnInit } from '@angular/core';
import { Asset } from 'src/app/shared/shared.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-manage-asset',
  templateUrl: './manage-asset.component.html',
  styleUrls: ['./manage-asset.component.css']
})

export class ManageAssetComponent implements OnInit {

  constructor(public service: AssetManagementService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  onSubmit(f: NgForm) {
    if(this.service.assetFormData.assetId == 0) {
      this.addAsset(f);
    }
    else
    this.editAsset(f);
  }

  addAsset(f: NgForm) {
    this.service.postAsset().subscribe(
      res => {
        this.resetForm(f);
        this.service.refreshAssetList();
        this.toastr.success('Added successfully', 'New Asset')
      },
      err => { console.log(err) }
    );
  }

  editAsset(f: NgForm) {
    this.service.putAsset().subscribe(
      res => {
        this.resetForm(f);
        this.service.refreshAssetList();
        this.toastr.success('Updated successfully', 'Asset Details')
      },
      err => { console.log(err) }
    );
  }

  resetForm(f: NgForm) {
    f.form.reset();
    this.service.assetFormData = new Asset();
  }

}
