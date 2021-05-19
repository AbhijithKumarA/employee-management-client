import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AssetManagementService } from '../shared/asset-management.service';
import { Asset } from '../shared/shared.model';

@Component({
  selector: 'app-asset-list',
  templateUrl: './asset-list.component.html',
  styleUrls: ['./asset-list.component.css']
})
export class AssetListComponent implements OnInit {

  userDetails : any;
  saved = localStorage.getItem('user');
  user = JSON.parse(this.saved || '');

  constructor(public service: AssetManagementService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.service.refreshAssetList();    
  }

  populate(selected: Asset) {
    if (selected.allocatedToId == null) {
      selected.allocatedTo = 0;
    }
    if (selected.allocatedById == null) {
      selected.allocatedBy = 0;
    }
    this.service.assetFormData = Object.assign({}, selected);
    
    console.log(this.service.assetFormData);
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