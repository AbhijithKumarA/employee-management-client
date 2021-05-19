import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Asset, Employee, AssetRequest } from './shared.model';

@Injectable({
  providedIn: 'root'
})
export class AssetManagementService {

  constructor(private http: HttpClient) { }

  readonly baseURL = "http://localhost:59132/api";

  assetFormData : Asset = new Asset();
  assetList : Asset[];

  assetRequestFormData : AssetRequest = new AssetRequest();
  assetRequestList : AssetRequest[];

  //ASSET LIST ACTIONS

  postAsset() {
    return this.http.post(`${this.baseURL}/Asset`, this.assetFormData);
  }

  putAsset() {
    return this.http.put(`${this.baseURL}/Asset/${this.assetFormData.assetId}`, this.assetFormData);
  }

  deleteAsset(id: number) {
    return this.http.delete(`${this.baseURL}/Asset/${id}`);
  }

  refreshAssetList() {
    this.http.get(`${this.baseURL}/Asset`)
    .toPromise()
    .then(res => this.assetList = res as Asset[]);
  }

  //ASSET REQUEST ACTIONS

  postAssetRequest() {
    return this.http.post(`${this.baseURL}/AssetRequests/PostAssetRequest`, this.assetRequestFormData);
  }

  putAssetRequest() {
    return this.http.put(`${this.baseURL}/AssetRequests/PutAssetRequest/${this.assetRequestFormData.assetRequestId}`, this.assetRequestFormData);
  }

  putAdminReview() {
    return this.http.put(`${this.baseURL}/AssetRequests/PutAdminReview/${this.assetRequestFormData.assetRequestId}`, this.assetRequestFormData);
  }

  deleteAssetRequest(id: number){
    return this.http.delete(`${this.baseURL}/AssetRequests/DeleteAssetRequest/${id}`);
  }

  refreshAssetRequestList() {
    this.http.get(`${this.baseURL}/AssetRequests/GetAssetRequest`)
    .toPromise()
    .then(res => this.assetRequestList = res as AssetRequest[]);
  }
  
  refreshEmployeeAssetRequestList(id: number) {
    this.http.get(`${this.baseURL}/AssetRequests/GetAssetRequest/${id}`)
    .toPromise()
    .then(res => this.assetRequestList = res as AssetRequest[]);
  }

}
