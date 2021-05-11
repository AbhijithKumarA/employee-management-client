import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assets',
  templateUrl: './assets.component.html',
  styleUrls: ['./assets.component.css']
})
export class AssetRequestsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    //this.service.refreshAssetList();
  }

//   populate(selected: Asset) {
//     this.service.assetFormData = Object.assign({}, selected)
//   }

//   onDelete(id: number) {
//     if(confirm('Are you sure you want to delete this Asset?'))
//     {
//       this.service.deleteAsset(id).subscribe(
//         res => {
//           this.service.refreshAssetList();
//           this.toastr.error('Deleted successfully', 'Asset details');
//         },
//         err => { console.log(err); }
//       );
//     }
//   }
}