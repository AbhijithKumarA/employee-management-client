import { AuthInterceptor } from './shared/auth.interceptor';
import { UserService } from './shared/user.service';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { ToastrModule } from 'ngx-toastr';
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
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { ManageAssetRequestsComponent } from './asset-requests/manage-asset-requests/manage-asset-requests.component';
import { AdminReviewComponent } from './asset-requests/admin-review/admin-review.component';


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
    ProfileComponent,
    LoginComponent,
    RegisterComponent,
    ForbiddenComponent,
    ManageAssetRequestsComponent,
    AdminReviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    ToastrModule.forRoot()
  ],
  providers: [UserService, {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
