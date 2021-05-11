import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AssetManagementService } from '../shared/asset-management.service';
import { Asset } from '../shared/shared.model';

@Component({
  selector: 'app-employees',
  templateUrl: './assets.component.html',
  styleUrls: ['./assets.component.css']
})
export class AssetListComponent implements OnInit {

  constructor(public service: AssetManagementService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.service.refreshAssetList();
  }

  populate(selected: Asset) {
    this.service.assetFormData = Object.assign({}, selected)
  }
  onDelete(id: number) {
    if(confirm('Are you sure you want to delete this asset?'))
    {
      this.service.deleteAsset(id).subscribe(
        res => {
          this.service.refreshAssetList();
          this.toastr.error('Deleted successfully', 'Asset details');
        },
        err => { console.log(err); }
      );
    }
  }

}