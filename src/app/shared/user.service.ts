import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private fb: FormBuilder, private http: HttpClient) { }

  readonly baseURL = "http://localhost:59132/api";

  formModel = this.fb.group({
    EmployeeId: ['', Validators.required],
    Username: ['', Validators.required],
    Passwords: this.fb.group({
      Password: ['', [Validators.required, Validators.minLength(8)]],
    ConfirmPassword: ['', Validators.required]
    }, { validator: this.comparePasswords })
  });

  comparePasswords(fb: FormGroup){
    let confirmPasswordControl = fb.get('ConfirmPassword');
    if(confirmPasswordControl?.errors == null || 'passwordMismatch' in confirmPasswordControl.errors){
      if(fb.get('Password')?.value != confirmPasswordControl?.value){
        confirmPasswordControl?.setErrors({ passwordMismatch: true });
      }
      else
        confirmPasswordControl?.setErrors(null);
    }
  }

  register() {
    var body = {
      Id: this.formModel.value.EmployeeId,
      Username: this.formModel.value.Username,
      Password: this.formModel.value.Passwords.Password
    }
    return this.http.post(this.baseURL+'/ApplicationUser/Register', body);
  }

  login(formData: any){
    return this.http.post(this.baseURL+'/ApplicationUser/Login', formData)
  }

  getUserProfile() {
    return this.http.get(this.baseURL+'/UserProfile');
  }

  roleMatch(allowedRoles: any) : boolean {
    var isMatch = false;
    var payLoad = JSON.parse(window.atob(localStorage.getItem('token')?.split('.')[1]!));
    var userRole = payLoad.role;
    allowedRoles.forEach((element:any) => {
      if (userRole == element)
        isMatch = true;
      return false;
    });
    return isMatch;
  }


}
