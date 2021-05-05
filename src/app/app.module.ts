import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { EmployeesComponent } from './employees/employees.component';
import { ManageEmployeeComponent } from './employees/manage-employee/manage-employee.component';
import { DepartmentsComponent } from './departments/departments.component';
import { ManageDepartmentComponent } from './departments/manage-department/manage-department.component';
import { AssetRequestsComponent } from './asset-requests/asset-requests.component';
import { AssetListComponent } from './asset-list/asset-list.component';
import { ManageAssetComponent } from './asset-list/manage-asset/manage-asset.component';
import { RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    EmployeesComponent,
    ManageEmployeeComponent,
    DepartmentsComponent,
    ManageDepartmentComponent,
    AssetRequestsComponent,
    AssetListComponent,
    ManageAssetComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/homepage', pathMatch: 'full' },
      { path: 'employees', component: EmployeesComponent },
      { path: 'departments', component: DepartmentsComponent },
      { path: 'asset-list', component: AssetListComponent },
      { path: 'asset-requests', component: AssetRequestsComponent },
      { path: 'profile', component: ProfileComponent }
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
