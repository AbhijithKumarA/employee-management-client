import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Asset, Employee } from './shared.model';

@Injectable({
  providedIn: 'root'
})
export class AssetManagementService {

  constructor(private http: HttpClient) { }

  readonly baseURL = "http://localhost:59132/api";

  assetFormData : Asset = new Asset();
  assetList : Asset[];

  postAsset() {
    return this.http.post(`${this.baseURL}/Asset`, this.assetFormData);
  }

  putAsset() {
    return this.http.put(`${this.baseURL}/Asset/${this.assetFormData.AssetId}`, this.assetFormData);
  }

  deleteAsset(id: number) {
    return this.http.delete(`${this.baseURL}/Asset/${this.assetFormData.AssetId}`);
  }

  refreshAssetList() {
    this.http.get(`${this.baseURL}/Asset`)
    .toPromise()
    .then(res => this.assetList = res as Asset[]);
  }
}
