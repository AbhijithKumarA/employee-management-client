import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AssetListComponent } from './asset-list/asset-list.component';
import { AssetRequestsComponent } from './asset-requests/asset-requests.component';
import { DepartmentsComponent } from './departments/departments.component';
import { EmployeesComponent } from './employees/employees.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './shared/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'homepage', component: HomepageComponent, canActivate: [AuthGuard] },
      { path: 'employees', component: EmployeesComponent, canActivate: [AuthGuard], data: {permittedRoles: ['Administrator']} },
      { path: 'departments', component: DepartmentsComponent, canActivate: [AuthGuard], data: {permittedRoles: ['Administrator']} },
      { path: 'asset-list', component: AssetListComponent, canActivate: [AuthGuard] },
      { path: 'asset-requests', component: AssetRequestsComponent, canActivate: [AuthGuard] },
      { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
      { path: 'forbidden', component: ForbiddenComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
